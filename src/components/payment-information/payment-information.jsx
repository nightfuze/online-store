import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";
import InputForm from "../input-form/input-form";

const PaymentInformation = () => {
  const { nextStep, updateFormData } = useContext(OrderContext);

  const fullName = useInput("", { isEmpty: true, isFullName: true });
  const cardNumber = useInput("", { isEmpty: true, isCardNumber: true });
  const expiryDate = useInput("", { isEmpty: true, isExpiryDate: true });

  const isFullNameEmpty = fullName.isDirty && fullName.isEmpty;
  const isCardNumberEmpty = cardNumber.isDirty && cardNumber.isEmpty;
  const isExpiryDateEmpty = expiryDate.isDirty && expiryDate.isEmpty;

  const isFullNameValid = fullName.isDirty && fullName.fullNameError;
  const isCardNumberValid = cardNumber.isDirty && cardNumber.cardNumberError;
  const isExpiryDateValid = expiryDate.isDirty && expiryDate.expiryDateError;

  const onClickHandler = () => {
    nextStep();
  };

  const onFullNameChangeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    fullName.onChange(e);
  };
  const onCardNumberChangeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    cardNumber.onChange(e);
  };
  const onExpiryDateChangeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    expiryDate.onChange(e);
  };
  const onFullNameBlurHandler = () => {
    fullName.onBlur();
  };
  const onCardNumberBlurHandler = () => {
    cardNumber.onBlur();
  };
  const onExpiryDateBlurHandler = () => {
    expiryDate.onBlur();
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <h1 className="order-form-header">Payment Information</h1>
        <div className="order-form-list">
          <div className="order-form-item">
            <InputForm
              label="Full name"
              type="text"
              id="fullName"
              placeholder="John Doe"
              onChange={onFullNameChangeHandler}
              onBlur={onFullNameBlurHandler}
              isEmpty={isFullNameEmpty}
              isValid={isFullNameValid}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Card number"
              type="text"
              id="cardNumber"
              placeholder="0123-4567-8910"
              onChange={onCardNumberChangeHandler}
              onBlur={onCardNumberBlurHandler}
              isEmpty={isCardNumberEmpty}
              isValid={isCardNumberValid}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Expiry date"
              type="text"
              id="expiryDate"
              placeholder="01/23"
              onChange={onExpiryDateChangeHandler}
              onBlur={onExpiryDateBlurHandler}
              isEmpty={isExpiryDateEmpty}
              isValid={isExpiryDateValid}
            />
          </div>
          <Button
            disabled={
              !fullName.isInputValid ||
              !cardNumber.isInputValid ||
              !expiryDate.isInputValid
            }
            buttonType="inverted"
            onClick={onClickHandler}
          >
            Continue to shipping information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
