import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FECTH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FECTH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopActionTypes.FECTH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsAsynStart = () => (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then((querySnapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(querySnapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionsFail(error.message)));
};

/*
  const collectionRef = firestore.collection("collections");
    const unsubscribe = collectionRef.onSnapshot(async (querySnapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(querySnapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
*/
