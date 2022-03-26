import { combineReducers } from "redux";
import kaikas from "./kaikas";
import metamask from "./metamask";

const reducer = combineReducers({
    kaikas,
    metamask
})

export default reducer