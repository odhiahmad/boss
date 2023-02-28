import { all, fork } from "redux-saga/effects";
import {
  watchGetTicket,
  watchCreateTicket,
  watchUpdateTicket,
  watchGetCustomer,
} from "./ticket";
import { watchGetAccessUser, watchGetToken } from "./public";
import {
  watchGetCategory,
  watchGetDepartment,
  watchGetPriority,
  watchGetSubCategory,
  watchGetSummaryCase,
  watchGetDepartmentEmail,
} from "./reference";

export default function* sagas() {
  yield all([
    fork(watchGetTicket),
    fork(watchCreateTicket),
    fork(watchUpdateTicket),
    fork(watchGetCustomer),
    fork(watchGetAccessUser),
    fork(watchGetToken),
    fork(watchGetCategory),
    fork(watchGetDepartment),
    fork(watchGetPriority),
    fork(watchGetSubCategory),
    fork(watchGetSummaryCase),
    fork(watchGetDepartmentEmail),
  ]);
}
