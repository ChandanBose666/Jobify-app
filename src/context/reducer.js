import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  SHOW_STATS_ERROR,
 } from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case SETUP_USER_BEGIN:
      return { ...state, isLoading: true };
    case SETUP_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        token: payload.token,
        user: payload.user,
        userLocation: payload.location,
        jobLocation: payload.location,
        showAlert: true,
        alertType: "success",
        alertText: payload.alertText,
      };
    case SETUP_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
        userLocation: "",
        jobLocation: "",
      };
    case UPDATE_USER_BEGIN:
      return { ...state, isLoading: true };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
        userLocation: payload.location,
        jobLocation: payload.location,
        showAlert: true,
        alertType: "success",
        alertText: "User Profile Updated!",
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg,
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case CLEAR_VALUES:
      const initialStates = {
        isEditing: false,
        editJobId: "",
        position: "",
        company: "",
        jobLocation: state.userLocation,
        jobType: "full-time",
        status: "pending",
      };

      return {
        ...state,
        ...initialStates,
      };
    case CREATE_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "New Job Created!",
      };
    case CREATE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg,
      };
    case GET_JOBS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: payload.jobs,
        totalJobs: payload.totalJobs,
        numOfPages: payload.numOfPages,
      };
    case SET_EDIT_JOB:
      const job = state.jobs.find((job) => job._id === payload.id);
      const { _id, position, company, jobLocation, jobType, status } = job;
      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      };
    case DELETE_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Job Updated Successfully",
      };
    case EDIT_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg,
      };
    case SHOW_STATS_BEGIN:
      return {
        ...state, isLoading: true, showAlert:false,
      }
    case SHOW_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: payload.stats,
        monthlyApplications: payload.monthlyApplications,
      }
    case SHOW_STATS_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg, 
      }
    default:
      throw new Error(`there is no such :${type}`);
  }
};

export default reducer;
