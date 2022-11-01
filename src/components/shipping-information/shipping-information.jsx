import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import { CartContext } from "../../contexts/cart-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";
import InputForm from "../input-form/input-form";

const ShippingInformation = () => {
  const { nextStep } = useContext(OrderContext);
  const { resetCartItems } = useContext(CartContext);

  const firstName = useInput("", { isEmpty: true });
  const lastName = useInput("", { isEmpty: true });
  const address = useInput("", { isEmpty: true });
  const zipCode = useInput("", { isEmpty: true });

  const isFirstNameEmpty = firstName.isDirty && firstName.isEmpty;
  const isLastNameEmpty = lastName.isDirty && lastName.isEmpty;
  const isAddressEmpty = address.isDirty && address.isEmpty;
  const isZipCodeEmpty = zipCode.isDirty && zipCode.isEmpty;

  const onChangeFirstNameHandler = (e) => {
    firstName.onChange(e);
  };
  const onBlurFirstNameHandler = () => {
    firstName.onBlur();
  };
  const onChangeLastNameHandler = (e) => {
    lastName.onChange(e);
  };
  const onBlurLastNameHandler = () => {
    lastName.onBlur();
  };
  const onChangeAddressHandler = (e) => {
    address.onChange(e);
  };
  const onBlurAddressHandler = () => {
    address.onBlur();
  };
  const onChangeZipCodeHandler = (e) => {
    zipCode.onChange(e);
  };
  const onBlurZipCodeHandler = () => {
    zipCode.onBlur();
  };

  const onClickHandler = () => {
    resetCartItems();
    nextStep();
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <h1 className="order-form-header">Shipping Information</h1>
        <div className="order-form-list">
          <div className="order-form-item">
            <InputForm
              label="First Name"
              id="firstName"
              type="text"
              placeholder="John Doe"
              onChange={onChangeFirstNameHandler}
              onBlur={onBlurFirstNameHandler}
              isEmpty={isFirstNameEmpty}
              isValid={false}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Last Name"
              id="lastName"
              type="text"
              placeholder="John Doe"
              onChange={onChangeLastNameHandler}
              onBlur={onBlurLastNameHandler}
              isEmpty={isLastNameEmpty}
              isValid={false}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Address"
              id="address"
              type="text"
              placeholder="city name, street name, house number"
              onChange={onChangeAddressHandler}
              onBlur={onBlurAddressHandler}
              isEmpty={isAddressEmpty}
              isValid={false}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Zip Code"
              id="zipCode"
              type="text"
              placeholder="12345"
              onChange={onChangeZipCodeHandler}
              onBlur={onBlurZipCodeHandler}
              isEmpty={isZipCodeEmpty}
              isValid={false}
            />
          </div>
          <Button
            disabled={
              !firstName.isInputValid ||
              !lastName.isInputValid ||
              !address.isInputValid ||
              !zipCode.isInputValid
            }
            buttonType="inverted"
            onClick={onClickHandler}
          >
            confirm information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingInformation;
