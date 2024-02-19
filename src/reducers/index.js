import { combineReducers } from "redux";
import likeDislike from "./likeDislike";

const rootReducer = combineReducers({
    likeDislike,
})

export default rootReducer;