import {useRecoilState} from "recoil";
import {statusStateAtom} from "../store/statusStateAtom";

import items from "../dummy.json";

import Tabs from "./Tabs";
import Items from "./Items";
import Notification from "./Notification";

import "../styles/App.scss";


export default function App() {
    const [statusState, setStatusState] = useRecoilState(statusStateAtom);

    function hide() {
        setStatusState(false);
    }

    return <>
        <Tabs />
        <Items items={items} />
        <Notification status={statusState} onClick={hide}>
            Copied!
        </Notification>
    </>
}
