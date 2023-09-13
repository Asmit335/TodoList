import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./component/App";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;

ReactDOM.createRoot(
  // <h1>hello</h1>,
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
