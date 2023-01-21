import { createSelector } from "reselect";

const selectShopReducer = (store) => store.shopReducer;

export const selectShopCollections = createSelector(
  [selectShopReducer],
  (shopReducer) => shopReducer.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
 
export const selectIsCollectionsFetching = createSelector(
  [selectShopReducer],
  shopReducer => shopReducer.isFetching
)  
