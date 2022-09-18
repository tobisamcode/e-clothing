import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../preview-collection/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStatesToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStatesToProps)(CollectionsOverview);
