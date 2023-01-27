import { combineReducers } from "redux";
import {
  createTicket,updateTicket,getTicket

} from "../reducers/ticket";

const rootReducer = combineReducers({
  createTicket,
  updateTicket,
  getTicket,
});

export default rootReducer;
