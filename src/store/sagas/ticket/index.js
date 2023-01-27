import { put, takeLatest } from "redux-saga/effects";
import {
    GET_TICKET_PROCESS, GET_TICKET_SUCCESS, GET_TICKET_ERROR, GET_TICKET, CREATE_TICKET_PROCESS, CREATE_TICKET_SUCCESS, CREATE_TICKET_ERROR, CREATE_TICKET,UPDATE_TICKET_PROCESS, UPDATE_TICKET_SUCCESS, UPDATE_TICKET_ERROR, UPDATE_TICKET
} from './../../actions/ticket'
import { filterFetch } from './../../../utils/apiFetch'
import {
    API_TIMEOUT,
    API_URL_WEB,
} from './../../../utils/constant'

function* getTicket(action) {
    yield put({
        type: GET_TICKET_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + '', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
        });
        yield put({
            type: GET_TICKET_SUCCESS,
            result: result,
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
        type: UPDATE_TICKET_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + '', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
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
        type: CREATE_TICKET_PROCESS
    });
    try {
        const result = yield filterFetch(API_URL_WEB + '', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            timeout: API_TIMEOUT,
            body: JSON.stringify(action.data),
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


export function* watchGetTicket() {
    yield takeLatest(GET_TICKET, getTicket);
}




export function* watchCreateTicket() {
    yield takeLatest(CREATE_TICKET, createTicket);
}




export function* watchUpdateTicket() {
    yield takeLatest(UPDATE_TICKET, updateTicket);
}


