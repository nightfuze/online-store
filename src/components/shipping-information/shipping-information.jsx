import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";

import "./shipping-information.scss";

const ShippingInformation = () => {
  const { nextStep } = useContext(OrderContext);

  const firstName = useInput("", { isEmpty: true });
  const lastName = useInput("", { isEmpty: true });
  const address = useInput("", { isEmpty: true });
  const zipCode = useInput("", { isEmpty: true });

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
    nextStep();
  };

  return (
    <div className="order-form">
      <h1 className="order-form-header">Shipping Information</h1>
      <div className="order-form-list">
        <div className="order-form-item">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="John"
            onChange={onChangeFirstNameHandler}
            onBlur={onBlurFirstNameHandler}
          />
          {firstName.isDirty && firstName.isEmpty && (
            <div>The field cannot be empty</div>
          )}
        </div>
        <div className="order-form-item">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Doe"
            onChange={onChangeLastNameHandler}
            onBlur={onBlurLastNameHandler}
          />
          {lastName.isDirty && lastName.isEmpty && (
            <div>The field cannot be empty</div>
          )}
        </div>
        <div className="order-form-item">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Nulla St.
            Mankato Mississippi "
            onChange={onChangeAddressHandler}
            onBlur={onBlurAddressHandler}
          />
          {address.isDirty && address.isEmpty && (
            <div>The field cannot be empty</div>
          )}
        </div>
        <div className="order-form-item">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            placeholder="96522"
            onChange={onChangeZipCodeHandler}
            onBlur={onBlurZipCodeHandler}
          />
          {zipCode.isDirty && zipCode.isEmpty && (
            <div>The field cannot be empty</div>
          )}
        </div>
      </div>
      <Button
        disabled={
          !firstName.isInputValid ||
          !lastName.isInputValid ||
          !address.isInputValid ||
          zipCode.isInputValid
        }
        buttonType="inverted"
        onClick={onClickHandler}
      >
        confirm information
      </Button>
    </div>
  );
};

export default ShippingInformation;
