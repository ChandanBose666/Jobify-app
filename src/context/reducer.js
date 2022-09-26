import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./action";

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
    case REGISTER_USER_BEGIN:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        token: payload.token,
        user: payload.user,
        userLocation: payload.location,
        jobLocation: payload.location,
        showAlert: true,
        alertType: "success",
        alertText: "User Created! Redirecting...",
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: payload.msg,
      };
    default:
      throw new Error(`there is no such :${type}`);
  }
};

export default reducer;
