import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
  error: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGNIN_START:
    case UserActionTypes.GOOGLE_SIGNIN_START:
    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.GOOGLE_SIGNIN_SUCCESS:
    case UserActionTypes.EMAIL_SIGNIN_SUCCESS:
    case UserActionTypes.CHECK_USER_SESSION_SUCCESS:
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: undefined,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.GOOGLE_SIGNIN_FAIL:
    case UserActionTypes.EMAIL_SIGNIN_FAIL:
    case UserActionTypes.CHECK_USER_SESSION_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
