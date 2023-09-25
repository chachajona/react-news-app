import { history } from "../utils/history";
import { configureStore } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import rootReducer from "../reducer/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware, routerMiddleware(history)]),
});

sagaMiddleware.run(rootSaga);

export default store;
