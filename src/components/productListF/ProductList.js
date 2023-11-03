import React from 'react';
import ProductCard from '../productCardF/ProductCard';
import { ListContainer } from './ProductList.styled';

const ProductList = ({ products }) => {
  return (
    <ListContainer>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ListContainer>
  );
};

export default ProductList;
