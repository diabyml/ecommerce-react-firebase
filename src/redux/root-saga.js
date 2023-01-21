import { call, all } from "redux-saga/effects";
import { cartSaga } from "./cart/cart.sagas";

import { fetchCollectionStart } from "./shop/shop.saga";
import { userSaga } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga),call(cartSaga)]);
}
