import {ReactNode} from "react";

import "../styles/Notification.scss";

interface NotificationProps {
    children: ReactNode,
    status: boolean,
    onClick?: any
}

export default function Notification({children, status, onClick}: NotificationProps) {
    return <div onClick={onClick} className={`notification ${status ? "active" : "inactive"}`}>
        {children}
    </div>
}
