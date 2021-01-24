import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// After successfull (redux action) --redirectTo--> (some-route)
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { createBrowserHistory } from 'history';

// import { userReducer } from 'src/modules/user/state/user.reducer';
// import { postReducer } from '../modules/post/state/post.reducer';

// import { stockReducer } from 'src/modules/stocks/state/reducer';
import { stockReducer } from 'src/modules/jstocks/state/reducer';

//--------------------------------- Redux: Reducer -----------------------------------

const createRootReducer = () => {
  return combineReducers({
    stockState: stockReducer
    // userState: userReducer
    // postState: postReducer
  });
};

// const rootReducer = combineReducers({...});

//--------------------------------- Redux: Store -----------------------------------
const rootReducer = createRootReducer();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
