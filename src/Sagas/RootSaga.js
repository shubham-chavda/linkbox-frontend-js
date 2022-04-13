import { fork, all } from "redux-saga/effects";
import globalWatcher from "./GlobalSaga";
import loginWatcher from "../Scenes/Login/LoginSaga";
export default function* RootSaga() {
	yield all([
		fork(globalWatcher),
		fork(loginWatcher),
	]);
}
