/* eslint-disable import/no-anonymous-default-export */
/* eslint no-console: 0 */
import axios from "axios";

export default {
	init(opts) {
		let baseUrl = "";
		let accessToken = "";
		const cancelToken = opts.CancelTokenSrc;
		if (Object.hasOwnProperty.call(opts, "baseUrl")) {
			({ baseUrl } = opts);
		}
		if (Object.hasOwnProperty.call(opts, "accessToken")) {
            
			({ accessToken } = opts);
		}

		return {
			request(url, method, queryParams, data, contentType) {
				if (!url) {
					throw new Error("Request - URL not defined");
				}

				if (!contentType) {
					contentType = "application/json";
				}

				if (!queryParams) {
					queryParams = {};
				}

				if (!data) {
					data = {};
				}

				url = baseUrl + url;

				switch (method) {
				case "GET":
					return this.get(url, queryParams, contentType);

				case "POST":
					return this.post(url, queryParams, data, contentType);

				case "PATCH":
					return this.patch(url, queryParams, data, contentType);

				case "DELETE":
					return this.del(url, queryParams, data, contentType);

				default:
					throw new Error("Request method not defined");
				}
			},
			get(url, queryParams, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						"x-access-token": accessToken,
					},
					params: queryParams,
				};

				return axios.get(url, config).catch((error) => {
					if (axios.isCancel(error)) {
						console.log(error.message);
					} else {
						throw error;
					}
				});
			},
			post(url, queryParams, data, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						"x-access-token": accessToken,
					},
					params: queryParams,
				};

				return axios.post(url, data, config).catch((error) => {
					if (axios.isCancel(error)) {
						console.log(error.message);
					} else {
						throw error;
					}
				});
			},

			patch(url, queryParams, data, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						"x-access-token": accessToken,
					},
					params: queryParams,
				};

				return axios.patch(url, data, config).catch((error) => {
					if (axios.isCancel(error)) {
						console.log(error.message);
					} else {
						throw error;
					}
				});
			},

			del(url, queryParams, contentType) {
				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						"x-access-token": accessToken,
					},
					params: queryParams,
				};

				return axios.delete(url, config).catch((error) => {
					if (axios.isCancel(error)) {
						console.log(error.message);
					} else {
						throw error;
					}
				});
			},

			url() {
				return baseUrl;
			},

			customRequest(url, queryParams, contentType) {
				if (!contentType) {
					contentType = "application/javascript";
				}

				if (!queryParams) {
					queryParams = {};
				}

				const config = {
					cancelToken,
					headers: {
						Accept: contentType,
						"x-access-token": accessToken,
					},
					params: queryParams,
				};

				url = `${window.location.origin}${url}`;

				return axios.delete(url, config).catch((error) => {
					if (axios.isCancel(error)) {
						console.log(error.message);
					} else {
						throw error;
					}
				});
			},
		};
	},
};
