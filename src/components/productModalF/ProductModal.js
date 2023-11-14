import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';
import { Rate } from "antd";

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

const ProductModal = ({ product }) => {
    const lorem = new LoremIpsum();
    const randomText = lorem.generateWords(40);

    return (
        <ModalContainer>
            <ModalContent>
                <TopContent>
                    <AnimalImage src={product.image} alt='Animal' />
                    <DescriptionContainer>
                        <AnimalName>{product.name}</AnimalName>
                        <AnimalDescription>{randomText}</AnimalDescription>
                    </DescriptionContainer>
                </TopContent>
                <Rating>
                    Rate Please!
                    <Rate style={{marginLeft: "30px"}}/>
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
