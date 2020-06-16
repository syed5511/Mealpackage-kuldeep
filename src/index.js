import React from "react";
import ReactDOM from "react-dom";

import MobileProvider from "./common_components/mobile_provider";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <MobileProvider>
      <App />
    </MobileProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
