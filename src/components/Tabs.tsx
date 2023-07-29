import {useRecoilState} from "recoil";
import {indexStateAtom} from "../store/indexStateAtom";
import {passwordStateAtom} from "../store/passwordStateAtom";

import Tab from "./Tab";

import "../styles/Tabs.scss";

export default function Tabs() {
    const [indexState, setIndexState] = useRecoilState(indexStateAtom);
    const [passwordState, setPasswordState] = useRecoilState(passwordStateAtom);

    function toggleIndex() {
        if (indexState == "a") setIndexState("d");
        else setIndexState("a");
    }

    function togglePassword() {
        if (passwordState == "h") setPasswordState("s");
        else setPasswordState("h");
    }

    return <section className="tabs">
        <Tab onClick={toggleIndex}>
            Index
            <span>[{indexState}]</span>
        </Tab>

        <Tab>Link</Tab>
        <Tab>Name</Tab>

        <Tab onClick={togglePassword}>
            Password
            <span>[{passwordState}]</span>
        </Tab>
    </section>
}
