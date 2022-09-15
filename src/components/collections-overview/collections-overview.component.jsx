import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStatesToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStatesToProps)(CollectionsOverview);
