import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./css/global.css";

const rootEl = document.querySelector("#root");
const root = rootEl && createRoot(rootEl);

root?.render(<App />);
