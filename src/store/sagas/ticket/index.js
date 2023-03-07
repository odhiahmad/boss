import { put, takeLatest } from "redux-saga/effects";
import {
  GET_TICKET_PROCESS,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
  GET_TICKET,
  CREATE_TICKET_PROCESS,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  CREATE_TICKET,
  UPDATE_TICKET_PROCESS,
  UPDATE_TICKET_SUCCESS,
  UPDATE_TICKET_ERROR,
  UPDATE_TICKET,
  GET_CUSTOMER_PROCESS,
  GET_CUSTOMER_SUCCESS,
  GET_CUSTOMER_ERROR,
  GET_CUSTOMER,
} from "./../../actions/ticket";
import { filterFetch } from "./../../../utils/apiFetch";
import { API_TIMEOUT, API_URL } from "./../../../utils/constant";
import Swal from "sweetalert2";
function* getTicket(action) {
  yield put({
    type: GET_TICKET_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL +
        `ticket/list/get?ticket_number=${action.data.ticket_id}&summary_case=${action.data.summary_case}&start_date=${action.data.start_date}&end_date=${action.data.end_date}&customer_name=${action.data.customer_name}&reporter_name=${action.data.reporter_name}&caller_number=${action.data.caller_number}&status=${action.data.status}&category=${action.data.category}&page=${action.data.page}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer " + sessionStorage.getItem("userTokenBossLite"),
        },
        timeout: API_TIMEOUT,
      }
    );
    yield put({
      type: GET_TICKET_SUCCESS,
      result: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_TICKET_ERROR,
      error: error,
    });
  }
}

function* updateTicket(action) {
  yield put({
    type: UPDATE_TICKET_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL + `ticket/data/update?ticket_id=${action.data.id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + sessionStorage.getItem("userTokenBossLite"),
        },
        timeout: API_TIMEOUT,
        body: JSON.stringify(action.data),
      }
    );
    Swal.fire({
      text: result.message,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: true,
    });
    yield put({
      type: UPDATE_TICKET_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: UPDATE_TICKET_ERROR,
      error: error,
    });
  }
}

function* createTicket(action) {
  yield put({
    type: CREATE_TICKET_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL + "ticket/data/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("userTokenBossLite"),
      },
      timeout: API_TIMEOUT,
      body: JSON.stringify(action.data),
    });
    Swal.fire({
      text: result.message,
      icon: "success",
      showCancelButton: false,
      showConfirmButton: true,
    });
    yield put({
      type: CREATE_TICKET_SUCCESS,
      result: result,
    });
  } catch (error) {
    yield put({
      type: CREATE_TICKET_ERROR,
      error: error,
    });
  }
}

function* getCustomer(action) {
  yield put({
    type: GET_CUSTOMER_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL + `user/data/byagrmnt/get?agreement=${action.data.agreement}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer " + sessionStorage.getItem("userTokenBossLite"),
        },
        timeout: API_TIMEOUT,
      }
    );
    yield put({
      type: GET_CUSTOMER_SUCCESS,
      result: result.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_CUSTOMER_ERROR,
      error: error,
    });
  }
}

export function* watchGetTicket() {
  yield takeLatest(GET_TICKET, getTicket);
}

export function* watchCreateTicket() {
  yield takeLatest(CREATE_TICKET, createTicket);
}

export function* watchUpdateTicket() {
  yield takeLatest(UPDATE_TICKET, updateTicket);
}

export function* watchGetCustomer() {
  yield takeLatest(GET_CUSTOMER, getCustomer);
}
