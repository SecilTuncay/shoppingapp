import React from "react";

import Slider from "./Slider";
import FavoritesListing from "./FavoritesListing";
import Categories from "./Categories";

function HomeContent() {
  return (
    <div className="mt-4">
      <Slider />
      {/* <FavoritesListing /> */}
      <Categories />
    </div>
  );
}

export default HomeContent;
