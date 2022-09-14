import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { CategoryPage } from "../category/category.component";

const ShopPage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
