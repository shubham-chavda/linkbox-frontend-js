import { Navigate } from "react-router";
import { takeLatest, all, call, put } from "redux-saga/effects";

import { setUserDetails, toggleLoader } from "../actions/action";
import sdk from "../Data";
import history from "../History";

function* getUserDetails() {
	const appsdk = sdk.init();
	try {
		const response = yield call(() => appsdk.user.me());
		const { status, data } = response;
		if (status === 200 && data.success) {
			yield put(setUserDetails(data.result));
		}
	} catch (error) {
        console.log("🚀 ~ file: GlobalSaga.js ~ line 16 ~ function*getUserDetails ~ error", error.response)
		window.localStorage.clear();
		history.push("/login");
		
	} finally {
		yield put(toggleLoader(false));
	}
}
function LogOutUser() {
	window.localStorage.clear();
	window.location.reload();
	history.push("/login");
}
export default function* globalStateWatcher() {
	const watchers = [
		yield takeLatest("GET_USER_DETAILS", getUserDetails),
		yield takeLatest("USER_LOG_OUT", LogOutUser)];
	yield all(watchers);
}
