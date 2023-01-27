import {
    CREATE_TICKET_PROCESS, CREATE_TICKET_SUCCESS, CREATE_TICKET_ERROR, CREATE_TICKET_RESET, UPDATE_TICKET_PROCESS, UPDATE_TICKET_SUCCESS, UPDATE_TICKET_ERROR, UPDATE_TICKET_RESET, GET_TICKET_PROCESS, GET_TICKET_SUCCESS, GET_TICKET_ERROR, GET_TICKET_RESET
} from "../../actions/ticket";


const initStateCreate = {
    result: null,
    loading: false,
    error:null
}

const initStateUpdate = {
    result: null,
    loading: false,
    error:null
}

const initStateGet = {
    result: null,
    loading: false,
    error:null
}

export function createTicket(state = initStateCreate, action) {
    switch (action.type) {
        case CREATE_TICKET_PROCESS:
            return {
                ...initStateCreate,
                loading: true,
                result: null,
                error: null,
            };
        case CREATE_TICKET_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case CREATE_TICKET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case CREATE_TICKET_RESET:
            return initStateCreate;
        default:
            return state;
    }
}

export function updateTicket(state = initStateUpdate, action) {
    switch (action.type) {
        case UPDATE_TICKET_PROCESS:
            return {
                ...initStateUpdate,
                loading: true,
                result: null,
                error: null,
            };
        case UPDATE_TICKET_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case UPDATE_TICKET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case UPDATE_TICKET_RESET:
            return initStateUpdate;
        default:
            return state;
    }
}


export function getTicket(state = initStateGet, action) {
    switch (action.type) {
        case GET_TICKET_PROCESS:
            return {
                ...initStateGet,
                loading: true,
                result: null,
                error: null,
            };
        case GET_TICKET_SUCCESS:
            return {
                ...state,
                result: action.result,
                loading: false,
                error: null,
            };
        case GET_TICKET_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false,
                result: null,
            };
        case GET_TICKET_RESET:
            return initStateGet;
        default:
            return state;
    }
}




