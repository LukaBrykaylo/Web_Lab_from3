import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';
import { Rate } from "antd";
import CatPicture from "../img/cat.jpg";
import Dog1Picture from "../img/dog1.jpg";
import ElephantPicture from "../img/elephant.jpg";
import Dog2Picture from "../img/dog2.jpg";
import GiraffePicture from "../img/giraffe.jpg";
import ParrotPicture from "../img/parrot.jpg";
import {
    ModalContainer,
    ModalContent,
    TopContent,
    AnimalImage,
    DescriptionContainer,
    AnimalName,
    AnimalDescription,
    BottomContent,
    CloseButton,
    AddToCartButton,
    Rating,
} from './ProductModule.styled';

let cardImages = [
    CatPicture, Dog1Picture, ElephantPicture, Dog2Picture, GiraffePicture, ParrotPicture, CatPicture
]

const ProductModal = ({ product }) => {
    const lorem = new LoremIpsum();
    const randomText = lorem.generateWords(40);

    return (
        <ModalContainer>
            <ModalContent>
                <TopContent>
                    <AnimalImage src={cardImages[product.id - 1]} alt='Animal' />
                    <DescriptionContainer>
                        <AnimalName>{product.name}</AnimalName>
                        <AnimalDescription>{randomText}</AnimalDescription>
                        <div className='Price'>Price {product.price}</div>
                    </DescriptionContainer>
                </TopContent>
                <Rating>
                    Rate Please!
                    <Rate style={{ marginLeft: "30px" }} />
                </Rating>
                <BottomContent>
                    <Link to={`../catalog/`} style={{ textDecoration: "none" }}>
                        <CloseButton>Close</CloseButton>
                    </Link>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                </BottomContent>
            </ModalContent>
        </ModalContainer>
    );
};

export default ProductModal;
