import {useEffect} from "react";

import {useRecoilState} from "recoil";
import {itemsStateAtom} from "../store/itemsStateAtom";
import {statusStateAtom} from "../store/statusStateAtom";

import Tabs from "./Tabs";
import Items from "./Items";
import Notification from "./Notification";

import "../styles/App.scss";
import { readTextFile, exists, BaseDirectory, createDir, writeTextFile } from "@tauri-apps/api/fs";

import Item from "../types/Item";
import NoPasswords from "./NoPasswords";

export default function App() {
    const [statusState, setStatusState] = useRecoilState(statusStateAtom);
    const [itemsState, setItemsState] = useRecoilState(itemsStateAtom);


    function hide() {
        setStatusState(false);
    }

    async function doFileWork() {
        try {
            const config = { dir: BaseDirectory.Document }
        
            await createDir("snaky", {
                dir: BaseDirectory.Document,
                recursive: true
            });

            if (!await exists("snaky/snaky.json", config))
                await writeTextFile("snaky/snaky.json", "[]", config);

            const text = await readTextFile("snaky/snaky.json", config);

            const items: Item[] = JSON.parse(text);

            setItemsState(items);
        } catch (exception) {
            console.error(exception);
        }
    }

    useEffect(() => {
        doFileWork();
    }, []);

    return <>
        <Tabs />
        {itemsState.length != 0 ? <Items items={itemsState} /> : <NoPasswords />}
        <Notification status={statusState} onClick={hide}>
            Copied!
        </Notification>
    </>
}
