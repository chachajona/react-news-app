import { history } from "../utils/history";
import { routerMiddleware } from "connected-react-router";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import createSagaMiddleware from "redux-saga";
import { rootSaga, createSagaInjector } from "../saga/rootSaga";
import rootReducer from "../reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware, routerMiddleware(history)]),
});
store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);
store.asyncReducers = {};
store.injectReducer = (key, asyncReducer) => {
  store.asyncReducers[key] = asyncReducer;
  store.replaceReducer(rootReducer(store.asyncReducers));
};
setupListeners(store.dispatch);
export default store;
