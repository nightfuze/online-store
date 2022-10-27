import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";
import Button from "../button/button";

import "./payment-information.scss";

const PaymentInformation = () => {
  const { nextStep, updateFormData, formData } = useContext(OrderContext);

  const fullNameRef = useRef();
  const cardNumberRef = useRef();
  const expiryDateRef = useRef();

  const onClickHandler = () => {
    updateFormData({
      ...{ [fullNameRef.current.id]: fullNameRef.current.value },
      ...{ [cardNumberRef.current.id]: cardNumberRef.current.value },
      ...{ [expiryDateRef.current.id]: expiryDateRef.current.value },
    });
    nextStep();
  };
  return (
    <div>
      <h1>Payment Information</h1>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          id="fullName"
          defaultValue={formData.fullName}
          ref={fullNameRef}
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Card number</label>
        <input
          type="text"
          id="cardNumber"
          defaultValue={formData.cardNumber}
          ref={cardNumberRef}
        />
      </div>
      <div>
        <label htmlFor="ExpiryDate">Expiry date</label>
        <input
          type="text"
          id="expiryDate"
          defaultValue={formData.expiryDate}
          ref={expiryDateRef}
        />
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>
        Continue to shipping information
      </Button>
    </div>
  );
};

export default PaymentInformation;
