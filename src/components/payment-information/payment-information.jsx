import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";
import Button from "../button/button";

import "./payment-information.scss";

const PaymentInformation = () => {
  const { nextStep } = useContext(OrderContext);

  const fullName = useInput("", { isEmpty: true });
  const cardNumber = useInput("", { isEmpty: true });
  const expiryDate = useInput("", { isEmpty: true });

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
    <div>
      <h1>Payment Information</h1>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          onChange={onFullNameChangeHandler}
          onBlur={onFullNameBlurHandler}
        />
        {fullName.isDirty && fullName.isEmpty && (
          <div>The field cannot be empty</div>
        )}
      </div>
      <div>
        <label htmlFor="cardNumber">Card number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="4444-3333-2222-1111"
          onChange={onCardNumberChangeHandler}
          onBlur={onCardNumberBlurHandler}
        />
        {cardNumber.isDirty && cardNumber.isEmpty && (
          <div>The field cannot be empty</div>
        )}
      </div>
      <div>
        <label htmlFor="ExpiryDate">Expiry date</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="01/23"
          onChange={onExpiryDateChangeHandler}
          onBlur={onExpiryDateBlurHandler}
        />
        {expiryDate.isDirty && expiryDate.isEmpty && (
          <div>The field cannot be empty</div>
        )}
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
  );
};

export default PaymentInformation;
