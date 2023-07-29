import {ReactNode} from "react";

import "../styles/Tab.scss";

interface TabProps {
    children: ReactNode,
    onClick?: any
}

export default function Tab({children, onClick}: TabProps) {
    return <button onClick={onClick} className="tab">
        {children}
    </button>
}
