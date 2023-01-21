import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import { UserActionTypes } from "./user.types";

import {
  googleSigninSuccess,
  googleSigninFail,
  emailSignInFail,
  emailSignInSuccess,
  checkUserSessionFailure,
  checkUserSessionSuccess,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailuer,
  signInSuccess,
  signInFailure,
} from "./user.actions";

export function* signInWithGoogle() {
  yield console.log("Google sign in saga called...");
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSigninFail(error.message));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

function* emailSignInAsync({ payload: { email, password } }) {
  yield console.log("Email Sign In Saga triggered...");
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {
    yield put(emailSignInFail(error.message));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, emailSignInAsync);
}

//CHECK FOR USER SESSION

function* isUserAuthenticated() {
  yield console.log("check user session saga");
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      checkUserSessionSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(checkUserSessionFailure(error));
  }
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//SIGN OUT USER SAGAS
function* signOutAsync() {
  yield console.log("SIGN OUT USER SAGA FIRED...");
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync);
}

//SIGN UP
function* signUp({ payload: { email, password, displayName } }) {
  yield console.log(`SIGN UP FIRING... ${email},${password},${displayName}`);
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailuer(error));
  }
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

//SIGN IN AFTER SIGN UP
function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield console.log("SIGN IN AFTER SIGN UP FIRING...");
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    put(signInFailure(error));
  }
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
