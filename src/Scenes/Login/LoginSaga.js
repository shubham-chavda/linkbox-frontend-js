import {
	takeEvery, all, call, put,
} from "redux-saga/effects";
import { push } from "connected-react-router/immutable";
import { notification } from "antd";

import appsdk from "../../Data";
import { setUserDetails, toggleLoader } from "../../actions/action";

function* loginUser(action) {
	yield put(toggleLoader(true));
	const sdk = appsdk.init();

	try {
		const response = yield call(() => sdk.user.login(action.payload));
		const { data, status } = response;
        console.log("🚀 ~ file: LoginSaga.js ~ line 17 ~ function*loginUser ~ response", response)

		if (status === 200 && data.success) {
			window.localStorage.setItem("accessToken", data.result.accessToken);

			yield put(setUserDetails(data.result));
			yield put(push("/"));
		}
		yield put(toggleLoader(false));
	} catch (e) {
        console.log("🚀 ~ file: LoginSaga.js ~ line 27 ~ function*loginUser ~ e", e)
		yield put(toggleLoader(false));
		notification.error({ message: 'Error', description: "Email or Password is Invalid" });
	}
}

export default function* LoginWatcher() {
	yield all([yield takeEvery("LOGIN_USER", loginUser)]);
}
