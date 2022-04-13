/* eslint-disable import/no-anonymous-default-export */
export default {
	init(initializedBase) {
		const base = initializedBase;
		return {
			me() {
				return base.details("/user/me");
			},
			login(data) {
				return base.create("/user/login", data);
			},
			getUsers(page,pageSize,filters=null) {
                console.log("🚀 ~ file: User.js ~ line 13 ~ getUsers ~ page,pageSize,filter={}", page,pageSize,filters)
				return base.list("/user",filters, page, pageSize);
			},
			createUser(data){
				return base.create("/user/create-user",data);
			},
			editUser(data,key){
				return base.edit(`/user/update-user/${key}`,data);
			},
			deleteUser(key){
				return base.remove(`/user/delete-user/${key}`);
			}
		};
	},
};
