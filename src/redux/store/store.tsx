
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./redusers/rootReducer";


export const store = createStore(rootReducer, applyMiddleware(thunk))