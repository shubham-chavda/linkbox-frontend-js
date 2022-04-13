import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { combineReducers } from "redux-immutable";
import {
	connectRouter,
	routerMiddleware,
} from "connected-react-router/immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import { Iterable, Map } from "immutable";
import { createLogger } from "redux-logger";

import history from "../History";

// Reducers
import RootReducer from "../Reducers/RootReducer";

// Sagas
import RootSaga from "../Sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
const initialState = Map();

const stateTransformer = (state) => {
	if (Iterable.isIterable(state)) return state.toJS();
	return state;
};

const loggerMiddleware = createLogger({
	stateTransformer,
	predicate: () => process.env.NODE_ENV === "development",
});

const middleware = () => {
	const enhancer = compose(
		applyMiddleware(sagaMiddleware, routerMiddleware(history), loggerMiddleware),
	);
	if (process.env.NODE_ENV === "development") {
		return composeWithDevTools(enhancer);
	}
	return enhancer;
};
const store = createStore(
    combineReducers({
		root: RootReducer,
      	router : connectRouter(history)
    }),
    initialState,
	middleware(),
  );
sagaMiddleware.run(RootSaga);

export default store;
