import {all,call, put, takeLatest} from 'redux-saga/effects';
import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

function* clearCartOnSignOut() {
    yield console.log('CLEAR CART SAGA FIRING...');
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}
export function* cartSaga() {
    yield all([
        call(onSignOutSuccess)
    ])
}