//import SHOP_DATA from "./shop.data";
import ShopActionTypes from "./shop.types";

//As now we moevd our shop data to firebase, we set our initial shop data to null
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FECTH_COLLECTIONS_START:
      return ({
        ...state,
        isFetching: true
      })
    case ShopActionTypes.FECTH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FECTH_COLLECTIONS_FAIL:
      return ({
        ...state,
        isFetching: false,
        errorMessage: action.payload
      })  
    default:
      return state;
  }
};

export default ShopReducer;
