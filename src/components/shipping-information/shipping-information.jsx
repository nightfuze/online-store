import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import { CartContext } from "../../contexts/cart-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";
import InputForm from "../input-form/input-form";

const ShippingInformation = () => {
  const { nextStep, updateFormData } = useContext(OrderContext);
  const { resetCartItems } = useContext(CartContext);

  const firstName = useInput("", { isEmpty: true, isFirstName: true });
  const lastName = useInput("", { isEmpty: true, isLastName: true });
  const address = useInput("", { isEmpty: true, isAddress: true });
  const zipCode = useInput("", { isEmpty: true, isZipCode: true });

  const isFirstNameEmpty = firstName.isDirty && firstName.isEmpty;
  const isLastNameEmpty = lastName.isDirty && lastName.isEmpty;
  const isAddressEmpty = address.isDirty && address.isEmpty;
  const isZipCodeEmpty = zipCode.isDirty && zipCode.isEmpty;

  const isFirstNameValid = firstName.isDirty && firstName.firstNameError;
  const isLastNameValid = lastName.isDirty && lastName.lastNameError;
  const isAddressValid = address.isDirty && address.addressError;
  const isZipCodeValid = zipCode.isDirty && zipCode.zipCodeError;

  const onChangeFirstNameHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    firstName.onChange(e);
  };
  const onChangeLastNameHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    lastName.onChange(e);
  };
  const onChangeAddressHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    address.onChange(e);
  };
  const onChangeZipCodeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    zipCode.onChange(e);
  };
  const onBlurFirstNameHandler = () => {
    firstName.onBlur();
  };
  const onBlurLastNameHandler = () => {
    lastName.onBlur();
  };
  const onBlurAddressHandler = () => {
    address.onBlur();
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
              placeholder="John"
              onChange={onChangeFirstNameHandler}
              onBlur={onBlurFirstNameHandler}
              isEmpty={isFirstNameEmpty}
              isValid={isFirstNameValid}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Last Name"
              id="lastName"
              type="text"
              placeholder="Doe"
              onChange={onChangeLastNameHandler}
              onBlur={onBlurLastNameHandler}
              isEmpty={isLastNameEmpty}
              isValid={isLastNameValid}
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
              isValid={isAddressValid}
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
              isValid={isZipCodeValid}
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
