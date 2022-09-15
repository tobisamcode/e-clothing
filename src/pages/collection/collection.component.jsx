import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collection.styles.scss";

const CollectionPage = () => {
  const { collectionId } = useParams();

  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );

  console.log(collection);
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
