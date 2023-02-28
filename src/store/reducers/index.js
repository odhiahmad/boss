import { combineReducers } from "redux";
import {
  createTicket,
  updateTicket,
  getTicket,
  getCustomer,
} from "../reducers/ticket";
import { getToken, getAccessUser } from "../reducers/public";
import {
  getCategory,
  getDepartment,
  getDepartmentEmail,
  getPriority,
  getSubCategory,
  getSummaryCase,
} from "../reducers/reference";
const rootReducer = combineReducers({
  createTicket,
  updateTicket,
  getTicket,
  getCustomer,
  getToken,
  getAccessUser,
  getCategory,
  getDepartment,
  getDepartmentEmail,
  getPriority,
  getSubCategory,
  getSummaryCase,
});

export default rootReducer;
