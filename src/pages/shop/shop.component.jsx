import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import { selectShopItems } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStatesToProps = createStructuredSelector({
  collections: selectShopItems
});

export default connect(mapStatesToProps)(ShopPage);
