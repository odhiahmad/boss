import {
  GET_CATEGORY_PROCESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_RESET,
  GET_DEPARTMENT_PROCESS,
  GET_DEPARTMENT_SUCCESS,
  GET_DEPARTMENT_ERROR,
  GET_DEPARTMENT_RESET,
  GET_DEPARTMENT_EMAIL_PROCESS,
  GET_DEPARTMENT_EMAIL_SUCCESS,
  GET_DEPARTMENT_EMAIL_ERROR,
  GET_DEPARTMENT_EMAIL_RESET,
  GET_PRIORITY_PROCESS,
  GET_PRIORITY_SUCCESS,
  GET_PRIORITY_ERROR,
  GET_PRIORITY_RESET,
  GET_SUB_CATEGORY_PROCESS,
  GET_SUB_CATEGORY_SUCCESS,
  GET_SUB_CATEGORY_ERROR,
  GET_SUB_CATEGORY_RESET,
  GET_SUMMARY_CASE_PROCESS,
  GET_SUMMARY_CASE_SUCCESS,
  GET_SUMMARY_CASE_ERROR,
  GET_SUMMARY_CASE_RESET,
} from "../../actions/reference";

const initStateCategory = {
  result: null,
  loading: false,
  error: null,
};

const initStateDepartment = {
  result: null,
  loading: false,
  error: null,
};

const initStateDepartmentEmail = {
  result: null,
  loading: false,
  error: null,
};

const initStatePriority = {
  result: null,
  loading: false,
  error: null,
};

const initStateSubCategory = {
  result: null,
  loading: false,
  error: null,
};

const initStateSummaryCase = {
  result: null,
  loading: false,
  error: null,
};

export function getCategory(state = initStateCategory, action) {
  switch (action.type) {
    case GET_CATEGORY_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_CATEGORY_RESET:
      return initStateCategory;
    default:
      return state;
  }
}

export function getDepartment(state = initStateDepartment, action) {
  switch (action.type) {
    case GET_DEPARTMENT_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_DEPARTMENT_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_DEPARTMENT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_DEPARTMENT_RESET:
      return initStateDepartment;
    default:
      return state;
  }
}

export function getDepartmentEmail(state = initStateDepartmentEmail, action) {
  switch (action.type) {
    case GET_DEPARTMENT_EMAIL_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_DEPARTMENT_EMAIL_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_DEPARTMENT_EMAIL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_DEPARTMENT_EMAIL_RESET:
      return initStateDepartmentEmail;
    default:
      return state;
  }
}

export function getPriority(state = initStatePriority, action) {
  switch (action.type) {
    case GET_PRIORITY_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_PRIORITY_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_PRIORITY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_PRIORITY_RESET:
      return initStatePriority;
    default:
      return state;
  }
}

export function getSubCategory(state = initStateSubCategory, action) {
  switch (action.type) {
    case GET_SUB_CATEGORY_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_SUB_CATEGORY_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_SUB_CATEGORY_RESET:
      return initStateSubCategory;
    default:
      return state;
  }
}

export function getSummaryCase(state = initStateSummaryCase, action) {
  switch (action.type) {
    case GET_SUMMARY_CASE_PROCESS:
      return {
        ...state,
        loading: true,
        result: null,
        error: null,
      };
    case GET_SUMMARY_CASE_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_SUMMARY_CASE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    case GET_SUMMARY_CASE_RESET:
      return initStateSummaryCase;
    default:
      return state;
  }
}
