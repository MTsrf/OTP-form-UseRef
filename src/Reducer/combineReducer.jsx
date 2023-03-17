import loginReducer from "./login";
import counterReducer from "./Counter";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    count: counterReducer,
    login: loginReducer
})

export default allReducer;