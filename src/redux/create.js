import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import reducer from "./modules/reducers";
import rootSaga from "./modules/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
