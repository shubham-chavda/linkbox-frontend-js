/* eslint-disable import/no-anonymous-default-export */
import SimpleInterface from "./SimpleInterface";
import User from "./User";
export default {
	init(opts) {
		const client = SimpleInterface.init(opts);
		return {
			user: User.init(client),
		};
	},
};
