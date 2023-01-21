import { call, put, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionsSuccess, fetchCollectionsFail } from "./shop.actions";

export function* fetchCollectionsAsync() {
  console.log("Saga async fired on shop collections");
  try {
    const collectionRef = firestore.collection("collections");
    const querySnapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionSnapshotToMap,
      querySnapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFail(error.message));
  }

}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FECTH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
