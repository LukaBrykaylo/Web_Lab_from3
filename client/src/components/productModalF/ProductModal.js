import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';
import { Rate } from "antd";
import CatPicture from "../img/cat.jpg";
import Dog1Picture from "../img/dog1.jpg";
import ElephantPicture from "../img/elephant.jpg";
import Dog2Picture from "../img/dog2.jpg";
import GiraffePicture from "../img/giraffe.jpg";
import ParrotPicture from "../img/parrot.jpg";
import { useDispatch } from 'react-redux';
import { Button, Modal, Space, InputNumber } from "antd";
import { NavLink } from "react-router-dom";
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
    // const randomText = lorem.generateWords(40);
    const randomText = "officia veniam anim incididunt duis aute aute in dolor exercitation elit laboris quis tempor quis excepteur consequat dolore aliqua voluptate nostrud consectetur ad aliqua minim excepteur do pariatur in proident in amet Lorem officia culpa sint culpa cillum sit cupidatat"
    const [isModal, setIsModal] = useState(false);
    const [value, setValue] = useState('1');
    const dispatch = useDispatch();

    const addAnimal = () => {
        dispatch({
            type: "ADD_ANIMAL",
            payLoad: {
                id: product.id,
                img: cardImages[product.id],
                name: product.name,
                price: product.price,
                count: parseInt(value),
            },
        });
        showConfirmModal();
    };

    const showConfirmModal = () => {
        setIsModal(true);
    };

    const handleOk = () => {
        setIsModal(false);
    };

    const handleCancel = () => {
        setIsModal(false);
    };

    return (
        <div>
            <ModalContainer>
                <ModalContent>
                    <TopContent>
                        <AnimalImage src={cardImages[product.id - 1]} alt='Animal' />
                        <DescriptionContainer>
                            <AnimalName>{product.name}</AnimalName>
                            <AnimalDescription>{randomText}</AnimalDescription>
                            <div className='Price'>Price {product.price}</div>
                            <Space>
                                <h4>
                                    Count:
                                </h4>
                                <InputNumber min={1} value={value} onChange={setValue} />
                            </Space>
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
                        <AddToCartButton onClick={addAnimal}>Add to Cart</AddToCartButton>
                    </BottomContent>
                </ModalContent>
            </ModalContainer>
            <Modal
                title="Cart"
                visible={isModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <NavLink key="back" to="/cart">
                        <Button onClick={handleOk}>To Cart</Button>
                    </NavLink>,
                    <Button key="continue" type="primary" onClick={handleCancel} style={{ marginLeft: "20px" }}>
                        Continue
                    </Button>
                ]}
            >
                <p>{product.name} has been added to your cart.</p>
            </Modal>
        </div>
    );
};

export default ProductModal;
