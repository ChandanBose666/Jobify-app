import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
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
    default:
      throw new Error(`there is no such :${type}`);
  }
};

export default reducer;
