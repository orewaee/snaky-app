import {StrictMode} from "react";
import ReactDOM from "react-dom/client";

import {RecoilRoot} from "recoil";

import App from "./components/App";

import "./styles/styles.scss";
import "./styles/typography.scss";

ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <RecoilRoot>
        <StrictMode>
            <App />
        </StrictMode>
    </RecoilRoot>
);
