export const GET_ACCESS_USER_PROCESS = "GET_ACCESS_USER_PROCESS";
export const GET_ACCESS_USER_SUCCESS = "GET_ACCESS_USER_SUCCESS";
export const GET_ACCESS_USER_ERROR = "GET_ACCESS_USER_ERROR";
export const GET_ACCESS_USER_RESET = "GET_ACCESS_USER_RESET";
export const GET_ACCESS_USER = "GET_ACCESS_USER";

export const GET_TOKEN_PROCESS = "GET_TOKEN_PROCESS";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_ERROR = "GET_TOKEN_ERROR";
export const GET_TOKEN_RESET = "GET_TOKEN_RESET";
export const GET_TOKEN = "GET_TOKEN";

export function getAccessUser(data) {
  let TYPE = data.reset ? GET_ACCESS_USER_RESET : GET_ACCESS_USER;
  return {
    type: TYPE,
    data: data,
  };
}

export function getToken(data) {
  let TYPE = data.reset ? GET_TOKEN_RESET : GET_TOKEN;
  return {
    type: TYPE,
    data: data,
  };
}
