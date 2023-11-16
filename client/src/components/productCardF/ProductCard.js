import React from 'react';
import { CardContainer, ProductName, ProductDescription, ProductPrice, Image, ViewMoreBut } from './ProductCard.styled'
import { Link } from 'react-router-dom';
import CatPicture from "../img/cat.jpg";
import Dog1Picture from "../img/dog1.jpg";
import ElephantPicture from "../img/elephant.jpg";
import Dog2Picture from "../img/dog2.jpg";
import GiraffePicture from "../img/giraffe.jpg";
import ParrotPicture from "../img/parrot.jpg";

let cardImages = [
  CatPicture, Dog1Picture, ElephantPicture, Dog2Picture, GiraffePicture, ParrotPicture, CatPicture
]

const ProductCard = ({ product, onViewMore }) => {

  const handleViewMoreClick = () => {
    onViewMore(product);
  };

  return (
    <CardContainer>
      <Image src={cardImages[product.id-1]} alt='fail' />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <ViewMoreBut onClick={handleViewMoreClick}>
          View More
        </ViewMoreBut>
      </Link>
    </CardContainer>
  );
};

export default ProductCard;