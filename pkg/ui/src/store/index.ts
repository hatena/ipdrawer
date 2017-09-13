import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer, { AdminUIState } from '../reducers';

export function configureStore(initialState?: AdminUIState): Store<AdminUIState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const middlewares = [
    logger,
    thunk
  ];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<AdminUIState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
