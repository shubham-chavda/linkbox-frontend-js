/* eslint-disable import/no-anonymous-default-export */

import assign from "lodash/assign";
import Base from "./base";

export default {
	init(opts) {
		const base = Base.init(opts);

		return {
			list(url, filters, page, pageSize) {
				if (!page) {
					page = 1;
				}

				if (!pageSize) {
					pageSize = 2;
				}

				const queryParams = {};
				if (filters) {
					queryParams.filters = filters;
				}

				queryParams.page = page;
				queryParams.pageSize = pageSize;
				return base.request(url, "GET", queryParams, null, null);
			},

			details(url, filters, contentType) {
				if (!filters) {
					filters = {};
				}

				let queryParams = {};
				queryParams = assign(queryParams, filters);

				return base.request(url, "GET", queryParams, null, contentType);
			},

			create(url, data, queryParams, method, contentType) {
				if (!method) {
					method = "POST";
				}

				return base.request(url, method, queryParams, data, contentType);
			},

			edit(url, data, queryParams, method, contentType) {
				if (!method) {
					method = "PATCH";
				}

				return base.request(url, method, queryParams, data, contentType);
			},

			remove(url, queryParams, method, contentType) {
				if (!method) {
					method = "DELETE";
				}

				return base.request(url, method, queryParams, contentType);
			},

			customRequest(url, queryParams, contentType) {
				return base.customRequest(url, queryParams, contentType);
			},
		};
	},
};
