import {combineReducers} from "redux";
import {toolReducer } from "./toolReducer";
import {toolUserReducer } from "./toolUserReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    users: userReducer,
    tools: toolReducer,
    toolUser: toolUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>