import { put, takeLatest } from "redux-saga/effects";
import {
  GET_ACCESS_USER_PROCESS,
  GET_ACCESS_USER_SUCCESS,
  GET_ACCESS_USER_ERROR,
  GET_ACCESS_USER,
  GET_TOKEN_PROCESS,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  GET_TOKEN,
} from "./../../actions/public";
import { filterFetch } from "./../../../utils/apiFetch";
import { API_TIMEOUT, API_URL } from "./../../../utils/constant";

function* getAccessUser(action) {
  yield put({
    type: GET_ACCESS_USER_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL + "public/baflite/get-access-user",
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
    yield put({
      type: GET_ACCESS_USER_SUCCESS,
      result: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_ACCESS_USER_ERROR,
      error: error,
    });
  }
}

function* getToken(action) {
  yield put({
    type: GET_TOKEN_PROCESS,
  });
  try {
    const result = yield filterFetch(
      "https://apidemo.baf.id/baf/care/token/get",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        timeout: API_TIMEOUT,
        body: JSON.stringify(action.data),
      }
    );
    window.sessionStorage.setItem("userTokenBossLite", result.data);
    yield put({
      type: GET_TOKEN_SUCCESS,
      result: result.data,
    });
  } catch (error) {
    yield put({
      type: GET_TOKEN_ERROR,
      error: error,
    });
  }
}

export function* watchGetAccessUser() {
  yield takeLatest(GET_ACCESS_USER, getAccessUser);
}

export function* watchGetToken() {
  yield takeLatest(GET_TOKEN, getToken);
}
