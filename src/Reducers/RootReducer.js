import { fromJS } from "immutable";

const initialState = fromJS({
	globalLoader: true,
	userDetails: {},
});

const RootReducer = (state = initialState, action) => {
	switch (action.type) {
	case "SET_USER_DETAILS": {
		return state.set("userDetails", fromJS(action.payload));
	}
	case "TOGGLE_LOADING": {
		return state.set("globalLoader", fromJS(action.payload));
	}

	default:
		return state;
	}
};

export default RootReducer;
