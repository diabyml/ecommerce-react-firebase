import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

//GGOGLE SIGN IN ACTIONS
export const googleSigninStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const googleSigninSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const googleSigninFail = (error) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_FAIL,
  payload: error,
});

//EMAIL SIGN IN ACTIONS
export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const emailSignInSuccess = (user) => ({
  type: UserActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});

export const emailSignInFail = (error) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_FAIL,
  payload: error,
});

//CHECK USER SESSION
export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const checkUserSessionSuccess = (user) => ({
  type: UserActionTypes.CHECK_USER_SESSION_SUCCESS,
  payload: user,
});

export const checkUserSessionFailure = (error) => ({
  type: UserActionTypes.CHECK_USER_SESSION_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailuer = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

//GENERAL
export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
