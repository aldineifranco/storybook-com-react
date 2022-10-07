import React from "react";
import ProductGrid from "./ProductGrid";
import imageCard from "../../stories/assets/empresa .jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: imageCard, title: "Título 1", summary: "Texto" },
      { id: 2, image: imageCard, title: "Título 2 ", summary: "Texto" },
      { id: 3, image: imageCard, title: "Título 3", summary: "Texto" },
      { id: 4, image: imageCard, title: "Título 4", summary: "Texto" },
      { id: 5, image: imageCard, title: "Título 5", summary: "Texto" },
      { id: 6, image: imageCard, title: "Título 6", summary: "Texto" },
    ]}
  />
);
