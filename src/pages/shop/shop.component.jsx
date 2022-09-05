import React from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div className="shop-page">
        <CollectionPreview />
      </div>
    );
  }
}

export default ShopPage;
