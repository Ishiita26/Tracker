import React from "react";
import ReactDOM from "react-dom";

import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

//root-empty tag inside html.
//actual time when we are accessing real dom.
//accessing through root id in html

ReactDOM.render(
  <SpeechProvider appId="4099916f-cbf9-4297-a8ef-5d9fa54914bc" language="en-US">
  <Provider>
    <App />
  </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
