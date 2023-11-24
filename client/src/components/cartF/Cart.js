import { useSelector } from "react-redux";
import {
    CartMain,
    AnimalImage, Price,
    DataInfo, DataButtonStyled, CartButton,
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./actions";
import { useState, useEffect } from "react";
import { Button } from "antd";
import CatPicture from "../img/cat.jpg";
import Dog1Picture from "../img/dog1.jpg";
import ElephantPicture from "../img/elephant.jpg";
import Dog2Picture from "../img/dog2.jpg";
import GiraffePicture from "../img/giraffe.jpg";
import ParrotPicture from "../img/parrot.jpg";

let cardImages = [
    CatPicture, Dog1Picture, ElephantPicture, Dog2Picture, GiraffePicture, ParrotPicture, CatPicture
]

const Cart = () => {
    const animalArray = useSelector((state) => state.animalList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        animalArray.forEach((animal) => {
            totalPrice += Math.round(parseInt(animal.price)) * animal.count;
        });
        setTotalPrice(totalPrice);
    }, [animalArray]);
    const dispatch = useDispatch();

    const handleIncrement = (name) => {
        dispatch(incrementCount(name));
    };

    const handleDecrement = (name) => {
        dispatch(decrementCount(name));
    };

    const filteredStadiums = animalArray.filter((animal) => animal.count > 0);

    return (
        <div>
            <CartMain>
                <div>
                    {filteredStadiums.map((animal, index) => (
                        <div key={index}>
                            <DataInfo>
                                <NavLink
                                    exact="true"
                                    to={`/product/${animal.id}`}
                                    style={{ textDecoration: "none", color: "black" }}
                                    onClick={(e) => {
                                        if (e.target.tagName === "BUTTON") {
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    <AnimalImage src={cardImages[animal.id - 1]} />
                                </NavLink>
                                <h3>{animal.name}</h3>
                                <Price>{parseInt(animal.price)}$</Price>
                                <DataButtonStyled>
                                    <p>{animal.count}</p>
                                    <a onClick={() => handleDecrement(animal.name)}>-</a>
                                    <a onClick={() => handleIncrement(animal.name)}>+</a>
                                </DataButtonStyled>
                            </DataInfo>
                        </div>
                    ))}
                </div>
                {totalPrice <= 0 && (
                    <p className="Nothing">
                        Nothing here!
                    </p>
                )}
                <CartButton>
                    <Button size={"large"}>
                        <NavLink to="/Catalog">TO CATALOG</NavLink>
                    </Button>
                    {totalPrice > 0 && (
                        <p style={{ fontSize: "18px" }}>
                            Total Price: {totalPrice}$
                        </p>
                    )}
                    {totalPrice > 0 && <Button size={"large"}>BUY</Button>}
                </CartButton>
            </CartMain>
        </div>

    );
};

export default Cart;