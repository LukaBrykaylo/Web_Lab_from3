import React from 'react';
import { CardContainer, ProductName, ProductDescription, ProductPrice, Image, ViewMoreBut } from './ProductCard.styled'
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onViewMore }) => {

  const handleViewMoreClick = () => {
    onViewMore(product);
  };

  return (
    <CardContainer>
      <Image src={product.image} alt='fail' />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      {/* <ViewMoreBut onClick={onViewMore} href='#'>View More</ViewMoreBut> */}
      <Link to={`/product/${product.id}`} style={{textDecoration: "none"}}>
        <ViewMoreBut onClick={handleViewMoreClick}>
          View More
        </ViewMoreBut>
      </Link>
    </CardContainer>
  );
};

export default ProductCard;