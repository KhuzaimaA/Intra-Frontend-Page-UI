import React from "react";
import styles from "../../../../styles/About/Products/Products.module.css";
import HorizontalLines from "../../Lines";
import font from "../../../../styles/Fonts.module.css"
import ProductScroll from "./ProductCard";
const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <p className={font.greenHeading}>Products</p>
      <p className={font.blueTagline}>Today and Beyond </p>
      <HorizontalLines />
      <div className={styles.productScrollContainer}><ProductScroll/></div>
    </div>
  );
};

export default Products;