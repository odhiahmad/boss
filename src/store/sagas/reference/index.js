import { put, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORY_PROCESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY,
  GET_DEPARTMENT_PROCESS,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_ERROR,
  GET_DEPARTMENT,
  GET_DEPARTMENT_EMAIL_PROCESS,
  GET_DEPARTMENT_EMAIL_SUCCESS,
  GET_DEPARTMENT_EMAIL_ERROR,
  GET_DEPARTMENT_EMAIL,
  GET_PRIORITY_PROCESS,
  GET_PRIORITY_SUCCESS,
  GET_PRIORITY_ERROR,
  GET_PRIORITY,
  GET_SUB_CATEGORY_PROCESS,
  GET_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY,
  GET_SUMMARY_CASE_PROCESS,
  GET_SUMMARY_CASE_SUCCESS,
  GET_SUMMARY_CASE_ERROR,
  GET_SUMMARY_CASE,
} from "./../../actions/reference";
import { filterFetch } from "./../../../utils/apiFetch";
import { API_TIMEOUT, API_URL } from "./../../../utils/constant";

function* getCategory() {
  yield put({
    type: GET_CATEGORY_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL + "reference/category", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("userTokenBossLite"),
      },
      timeout: API_TIMEOUT,
    });
    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: dataTemp[key],
      });
    });
    yield put({
      type: GET_CATEGORY_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_CATEGORY_ERROR,
      error: error,
    });
  }
}

function* getDepartment() {
  yield put({
    type: GET_DEPARTMENT_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL + "reference/department", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("userTokenBossLite"),
      },
      timeout: API_TIMEOUT,
    });

    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: dataTemp[key],
      });
    });

    yield put({
      type: GET_DEPARTMENT_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_DEPARTMENT_ERROR,
      error: error,
    });
  }
}

function* getDepartmentEmail(action) {
  yield put({
    type: GET_DEPARTMENT_EMAIL_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL +
        `reference/department-email?department_code=${action.data.department}`,
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

    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: key,
      });
    });

    yield put({
      type: GET_DEPARTMENT_EMAIL_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_DEPARTMENT_EMAIL_ERROR,
      error: error,
    });
  }
}

function* getPriority() {
  yield put({
    type: GET_PRIORITY_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL + "reference/priority", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("userTokenBossLite"),
      },
      timeout: API_TIMEOUT,
    });

    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: dataTemp[key],
      });
    });

    yield put({
      type: GET_PRIORITY_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_PRIORITY_ERROR,
      error: error,
    });
  }
}

function* getSubCategory(action) {
  yield put({
    type: GET_SUB_CATEGORY_PROCESS,
  });
  try {
    const result = yield filterFetch(
      API_URL + `reference/sub-category?category=${action.data.category}`,
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

    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: dataTemp[key],
      });
    });

    yield put({
      type: GET_SUB_CATEGORY_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_SUB_CATEGORY_ERROR,
      error: error,
    });
  }
}

function* getSummaryCase() {
  yield put({
    type: GET_SUMMARY_CASE_PROCESS,
  });
  try {
    const result = yield filterFetch(API_URL + "reference/summary-case", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("userTokenBossLite"),
      },
      timeout: API_TIMEOUT,
    });

    const data = [];
    const dataTemp = result.data;
    const keys = Object.keys(dataTemp);
    keys.forEach((key) => {
      data.push({
        value: key,
        label: dataTemp[key],
      });
    });

    yield put({
      type: GET_SUMMARY_CASE_SUCCESS,
      result: data,
    });
  } catch (error) {
    yield put({
      type: GET_SUMMARY_CASE_ERROR,
      error: error,
    });
  }
}

export function* watchGetCategory() {
  yield takeLatest(GET_CATEGORY, getCategory);
}

export function* watchGetDepartment() {
  yield takeLatest(GET_DEPARTMENT, getDepartment);
}

export function* watchGetDepartmentEmail() {
  yield takeLatest(GET_DEPARTMENT_EMAIL, getDepartmentEmail);
}

export function* watchGetPriority() {
  yield takeLatest(GET_PRIORITY, getPriority);
}

export function* watchGetSubCategory() {
  yield takeLatest(GET_SUB_CATEGORY, getSubCategory);
}

export function* watchGetSummaryCase() {
  yield takeLatest(GET_SUMMARY_CASE, getSummaryCase);
}
