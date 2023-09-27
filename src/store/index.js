import { history } from "../utils/history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/rootSaga";
import rootReducer from "../reducer/rootReducer";
import { createStore, applyMiddleware, compose } from "redux"; // Import compose

const sagaMiddleware = createSagaMiddleware();

function createSagaInjector(runSaga, rootSaga) {
    const injectedSagas = new Map();

    const isInjected = key => injectedSagas.has(key);
    const injectSaga = (key, saga) => {
        if (isInjected(key)) return;

        const task = runSaga(saga);

        injectedSagas.set(key, task);
    };
    injectSaga('root', rootSaga);
    return injectSaga;
}

export default function configureStore(initialState) {

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  // Use compose to combine store enhancers
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers( // Apply the composed enhancer here
      applyMiddleware(...middlewares)
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(rootReducer(store.asyncReducers))
  }

  store.injectSaga = createSagaInjector(store.runSaga, rootSaga);

  return store;
}