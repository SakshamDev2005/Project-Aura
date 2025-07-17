import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home/App.jsx";
// import Loading from "./Home/Loading.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App/>
    {/* <Loading /> */}
  </StrictMode>
);
