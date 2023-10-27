import React from 'react';
import ProductCard from 'C:\\Coding\\Web\\Lab6\\my-app\\src\\components\\productCardF\\ProductCard.js';
import {ListContainer} from './ProductList.styled';

const ProductList = ({ products }) => {
    return (
      <ListContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ListContainer>
    );
  };

export default ProductList;
