import React from "react";
import * as yup from "yup";
import { CheckoutContainer, CheckoutTitle } from "./Checkout.styled";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";

const Checkout = () => {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log(values);

        await new Promise((r) => setTimeout(r, 1000));
        actions.resetForm();
        navigate("/Cart/success");
    }



    const firstNameRegex = /^[a-zA-Z]+$/;
    const lastNameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}[-\s\.]?[0-9]{2,3}$/im;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().matches(firstNameRegex, { message: "First Name should contain only letters!" }).required("Field is required!"),
        lastName: yup.string().matches(lastNameRegex, { message: "Last Name should contain only letters!" }).required("Field is required!"),
        email: yup.string().matches(emailRegex, { message: "Enter a valid email!" }).required("Field is required!"),
        phone: yup.string().matches(phoneRegex, { message: "Enter a valid phone number!" }).required("Field is required!"),
        address: yup.string().required("Field is required!")
    });

    return (
        <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>
            <Formik initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: ""
            }}
                validationSchema={checkoutSchema}
                onSubmit={onSubmit} >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="inputs">
                            <div className="small-inputs">
                                <CustomInput
                                    label="First Name"
                                    name="firstName"
                                    type="text"
                                    placeholder="Enter your First Name"
                                />
                            </div>
                            <div className="small-inputs">
                                <CustomInput
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    placeholder="Enter your Last Name"
                                />
                            </div>
                            <div className="small-inputs">
                                <CustomInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="small-inputs">
                                <CustomInput
                                    label="Phone"
                                    name="phone"
                                    type="text"
                                    placeholder="Enter your Phone Number"
                                />
                            </div>
                            <div className="small-inputs">
                                <CustomInput
                                    label="Address"
                                    name="address"
                                    type="text"
                                    placeholder="Enter your Shipping Address"
                                />
                            </div>
                            <div className="buttons">
                                <Link to="/cart" className="back-button"><div>Go back</div></Link>
                                <button disabled={isSubmitting} type="submit" className="continue-button">Continue</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </CheckoutContainer>
    );
}

export default Checkout;