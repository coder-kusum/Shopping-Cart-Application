import React from 'react';
import { products } from "../data/products";
import Product from "./Product.jsx";
import styles from "./Products.module.css";
import Container from "./UI/Container";

function Products() {
  return (
    <Container>
      <h1>Best of ARC</h1>
      <div className={styles.products}>
        {
          products.map((product) => {
            return <Product {...product} key={product.id} />
          })
        }
      </div>
    </Container>
  )
}

export default Products;
