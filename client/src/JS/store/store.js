import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
// import reducerTask from '../reducers/reducerTask'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//const store = createStore( reducerUser, composeEnhancers(applyMiddleware(thunk))
                                     // composeEnhancers(applyMiddleware(...arr))
               //          )

// const store = createStore(rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;