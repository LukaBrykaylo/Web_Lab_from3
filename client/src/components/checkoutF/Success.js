import React, { useEffect } from "react";
import { SuccessContainer } from "./Success.styled";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Success = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "CLEAR_CART" });
    }, [dispatch]);
    return (
        <SuccessContainer>
            <div className="description">{"Your order is done\n We will email you soon"}</div>
            <Link to="/catalog" className="back-button">To catalog</Link>
        </SuccessContainer>
    );
}

export default Success;