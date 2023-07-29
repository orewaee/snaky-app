import {writeText} from "@tauri-apps/api/clipboard";

import {useRecoilState} from "recoil";
import { passwordStateAtom } from "../store/passwordStateAtom";
import { statusStateAtom } from "../store/statusStateAtom";

import "../styles/Item.scss";

interface ItemProps {
    index: number,
    link: string,
    name: string,
    password: string
}

export default function Item({index, link, name, password}: ItemProps) {
    const [passwordState] = useRecoilState(passwordStateAtom);
    const [_, setStatusState] = useRecoilState(statusStateAtom);

    function process(text: string, state: boolean) {
        if (!state) return text.length > 18 ? text.slice(0, 15) + "..." : text
        return "*".repeat(Math.min(text.length, 18))
    }

    async function copy(text: string) {
        await writeText(text);

        setStatusState(true);

        setTimeout(() => setStatusState(false), 1000);
    }

    return <div className="item">
        <button onClick={() => copy(index + "")}>{index}</button>
        <button onClick={() => copy(link)}>{link}</button>
        <button onClick={() => copy(name)}>{process(name, false)}</button>
        <button onClick={() => copy(password)}>{process(password, passwordState == "h")}</button>
    </div>
}
