import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import stateStore from "./components/ReduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={stateStore}>
		<App />
	</Provider>
);
