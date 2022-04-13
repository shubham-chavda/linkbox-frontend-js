/* eslint-disable */
import SDK from './SDK';

let obj = {};

// if (process.env.NODE_ENV === 'development') {
	obj = {
		init() {
				return SDK.init({
					baseUrl: `http://localhost:3000/api`,
					accessToken: window.localStorage.getItem('accessToken') || null,
					subdomain: process.env.subdomain,
				});
		},
	};

// } else {
// 	obj = {
// 		init() {
// 			return SDK.init({
// 				baseUrl: `${window.location.origin}/api`,
// 				accessToken: window.localStorage.getItem('accessToken') || null,
// 			});
// 		},
// 	};
// }

export default obj;
