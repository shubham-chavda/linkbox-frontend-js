
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store/store";
import App from "./App";
import history from "./History";
import { Router } from "react-router-dom";
import './index.css';
const render = Component =>
	ReactDOM.render(
			<Provider store={Store}>
				<Router history={history}>
					<Component />
				</Router>
			</Provider>,
		document.getElementById("root"),
	);

render(App);
