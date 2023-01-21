import React, { useEffect } from "react";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { Route } from "react-router-dom";
import CollectionPage from "../collection/colection.component";

import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage({ match, isLoading, fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
    return () => {
      //clean
    };
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
