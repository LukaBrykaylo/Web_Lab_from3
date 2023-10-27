import React from 'react';
import {CardContainer, ProductName, ProductDescription, ProductPrice} from './Product.styled'

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </CardContainer>
  );
};

export default ProductCard;