export const GET_CATEGORY_PROCESS = "GET_CATEGORY_PROCESS";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR";
export const GET_CATEGORY_RESET = "GET_CATEGORY_RESET";
export const GET_CATEGORY = "GET_CATEGORY";

export const GET_DEPARTMENT_PROCESS = "GET_DEPARTMENT_PROCESS";
export const GET_DEPARTMENT_SUCCESS = "GET_DEPARTMENT_SUCCESS";
export const GET_DEPARTMENT_ERROR = "GET_DEPARTMENT_ERROR";
export const GET_DEPARTMENT_RESET = "GET_DEPARTMENT_RESET";
export const GET_DEPARTMENT = "GET_DEPARTMENT";

export const GET_DEPARTMENT_EMAIL_PROCESS = "GET_DEPARTMENT_EMAIL_PROCESS";
export const GET_DEPARTMENT_EMAIL_SUCCESS = "GET_DEPARTMENT_EMAIL_SUCCESS";
export const GET_DEPARTMENT_EMAIL_ERROR = "GET_DEPARTMENT_EMAIL_ERROR";
export const GET_DEPARTMENT_EMAIL_RESET = "GET_DEPARTMENT_EMAIL_RESET";
export const GET_DEPARTMENT_EMAIL = "GET_DEPARTMENT_EMAIL";

export const GET_PRIORITY_PROCESS = "GET_PRIORITY_PROCESS";
export const GET_PRIORITY_SUCCESS = "GET_PRIORITY_SUCCESS";
export const GET_PRIORITY_ERROR = "GET_PRIORITY_ERROR";
export const GET_PRIORITY_RESET = "GET_PRIORITY_RESET";
export const GET_PRIORITY = "GET_PRIORITY";

export const GET_SUB_CATEGORY_PROCESS = "GET_SUB_CATEGORY_PROCESS";
export const GET_SUB_CATEGORY_SUCCESS = "GET_SUB_CATEGORY_SUCCESS";
export const GET_SUB_CATEGORY_ERROR = "GET_SUB_CATEGORY_ERROR";
export const GET_SUB_CATEGORY_RESET = "GET_SUB_CATEGORY_RESET";
export const GET_SUB_CATEGORY = "GET_SUB_CATEGORY";

export const GET_SUMMARY_CASE_PROCESS = "GET_SUMMARY_CASE_PROCESS";
export const GET_SUMMARY_CASE_SUCCESS = "GET_SUMMARY_CASE_SUCCESS";
export const GET_SUMMARY_CASE_ERROR = "GET_SUMMARY_CASE_ERROR";
export const GET_SUMMARY_CASE_RESET = "GET_SUMMARY_CASE_RESET";
export const GET_SUMMARY_CASE = "GET_SUMMARY_CASE";

export function getCategory(data) {
  return {
    type: GET_CATEGORY,
    data: data,
  };
}

export function getDepartment(data) {
  return {
    type: GET_DEPARTMENT,
    data: data,
  };
}

export function getDepartmentEmail(data) {
  let TYPE = data.reset ? GET_DEPARTMENT_EMAIL_RESET : GET_DEPARTMENT_EMAIL;
  return {
    type: TYPE,
    data: data,
  };
}

export function getPriority(data) {
  return {
    type: GET_PRIORITY,
    data: data,
  };
}

export function getSubCategory(data) {
  let TYPE = data.reset ? GET_SUB_CATEGORY_RESET : GET_SUB_CATEGORY;
  return {
    type: TYPE,
    data: data,
  };
}

export function getSummaryCase(data) {
  return {
    type: GET_SUMMARY_CASE,
    data: data,
  };
}
