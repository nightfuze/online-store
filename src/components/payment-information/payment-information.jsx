import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";
import InputForm from "../input-form/input-form";

const PaymentInformation = () => {
  const { nextStep } = useContext(OrderContext);

  const fullName = useInput("", { isEmpty: true });
  const cardNumber = useInput("", { isEmpty: true });
  const expiryDate = useInput("", { isEmpty: true });

  const isFullNameEmpty = fullName.isDirty && fullName.isEmpty;
  const isCardNumberEmpty = cardNumber.isDirty && cardNumber.isEmpty;
  const isExpiryDateEmpty = expiryDate.isDirty && expiryDate.isEmpty;

  const onClickHandler = () => {
    nextStep();
  };

  const onFullNameChangeHandler = (e) => {
    fullName.onChange(e);
  };
  const onFullNameBlurHandler = () => {
    fullName.onBlur();
  };
  const onCardNumberChangeHandler = (e) => {
    cardNumber.onChange(e);
  };
  const onCardNumberBlurHandler = () => {
    cardNumber.onBlur();
  };
  const onExpiryDateChangeHandler = (e) => {
    expiryDate.onChange(e);
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
              isValid={false}
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
              isValid={false}
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
              isValid={false}
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
