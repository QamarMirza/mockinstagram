import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
//import createBrowserHistory from 'history/createBrowserHistory';


import { rootReducer, intialState } from './root-reducer';
import { rootSaga } from './root-saga';
export const enhancers = [];

const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

export function createStoreWithMiddleware(history) {
  const sagaMiddleware = createSagaMiddleware()
  const routingMiddleware = routerMiddleware();
  //const history = createBrowserHistory();
  const store = createStore(
    rootReducer,
    intialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), sagaMiddleware, routingMiddleware),
      ...enhancers)
  );
  sagaMiddleware.run(rootSaga);

  return store;
}


