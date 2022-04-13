import * as LoginConstants from './LoginConstants';
export const loginUser = (payload) => ({
	type: LoginConstants.LOGIN_USER,
	payload,
});