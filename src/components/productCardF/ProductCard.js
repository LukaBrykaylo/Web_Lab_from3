import React from 'react';
import { CardContainer, ProductName, ProductDescription, ProductPrice, Image, ViewMoreBut } from './ProductCard.styled'

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <Image src={product.image} alt='fail' />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <ViewMoreBut>View More</ViewMoreBut>
    </CardContainer>
  );
};

export default ProductCard;