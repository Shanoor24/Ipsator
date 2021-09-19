import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { carReducer } from "./CarData/reducer";

const rootreducer = combineReducers({
    cardata: carReducer,
})

const store = createStore(rootreducer,
    compose(applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))


export default store;
