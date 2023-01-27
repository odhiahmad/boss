import { all, fork } from "redux-saga/effects";

import {
  watchGetTicket,watchCreateTicket,watchUpdateTicket
} from "./ticket";


export default function* sagas() {
  yield all([
    fork(watchGetTicket),
    fork(watchCreateTicket),
    fork(watchUpdateTicket)

  ]);
}
