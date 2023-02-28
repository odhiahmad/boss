import {
  GET_TOKEN_PROCESS,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_ERROR,
  GET_TOKEN_RESET,
  GET_ACCESS_USER_PROCESS,
  GET_ACCESS_USER_SUCCESS,
  GET_ACCESS_USER_ERROR,
  GET_ACCESS_USER_RESET,
} from "../../actions/public";

const initStateToken = {
  result: null,
  loading: false,
  error: null,
};

const initStateAccess = {
  result: null,
  loading: false,
  error: null,
};

export function getToken(state = initStateToken, action) {
  switch (action.type) {
    case GET_TOKEN_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_TOKEN_RESET:
      return initStateToken;
    default:
      return state;
  }
}

export function getAccessUser(state = initStateAccess, action) {
  switch (action.type) {
    case GET_ACCESS_USER_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_ACCESS_USER_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };

    case GET_ACCESS_USER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_ACCESS_USER_RESET:
      return initStateAccess;
    default:
      return state;
  }
}
