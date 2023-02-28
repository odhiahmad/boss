export const CREATE_TICKET_PROCESS = "CREATE_TICKET_PROCESS";
export const CREATE_TICKET_SUCCESS = "CREATE_TICKET_SUCCESS";
export const CREATE_TICKET_ERROR = "CREATE_TICKET_ERROR";
export const CREATE_TICKET_RESET = "CREATE_TICKET_RESET";
export const CREATE_TICKET = "CREATE_TICKET";

export const UPDATE_TICKET_PROCESS = "UPDATE_TICKET_PROCESS";
export const UPDATE_TICKET_SUCCESS = "UPDATE_TICKET_SUCCESS";
export const UPDATE_TICKET_ERROR = "UPDATE_TICKET_ERROR";
export const UPDATE_TICKET_RESET = "UPDATE_TICKET_RESET";
export const UPDATE_TICKET = "UPDATE_TICKET";

export const GET_TICKET_PROCESS = "GET_TICKET_PROCESS";
export const GET_TICKET_SUCCESS = "GET_TICKET_SUCCESS";
export const GET_TICKET_ERROR = "GET_TICKET_ERROR";
export const GET_TICKET_RESET = "GET_TICKET_RESET";
export const GET_TICKET = "GET_TICKET";

export const GET_CUSTOMER_PROCESS = "GET_CUSTOMER_PROCESS";
export const GET_CUSTOMER_SUCCESS = "GET_CUSTOMER_SUCCESS";
export const GET_CUSTOMER_ERROR = "GET_CUSTOMER_ERROR";
export const GET_CUSTOMER_RESET = "GET_CUSTOMER_RESET";
export const GET_CUSTOMER = "GET_CUSTOMER";

export function createTicket(data) {
  let TYPE = data.reset ? CREATE_TICKET_RESET : CREATE_TICKET;
  return {
    type: TYPE,
    data: data,
  };
}

export function updateTicket(data) {
  let TYPE = data.reset ? UPDATE_TICKET_RESET : UPDATE_TICKET;
  return {
    type: TYPE,
    data: data,
  };
}

export function getTicket(data) {
  let TYPE = data.reset ? GET_TICKET_RESET : GET_TICKET;
  return {
    type: TYPE,
    data: data,
  };
}

export function getCustomer(data) {
  let TYPE = data.reset ? GET_CUSTOMER_RESET : GET_CUSTOMER;
  return {
    type: TYPE,
    data: data,
  };
}
