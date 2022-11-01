import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";

import Button from "../button/button";
import InputForm from "../input-form/input-form";

const ContactInformation = () => {
  const { nextStep, updateFormData } = useContext(OrderContext);
  const email = useInput("", { isEmpty: true, isEmail: true });
  const phone = useInput("", { isEmpty: true, isPhone: true });

  const isEmailEmpty = email.isDirty && email.isEmpty;
  const isEmailValid = email.isDirty && email.emailError;

  const isPhoneEmpty = phone.isDirty && phone.isEmpty;
  const isPhoneValid = phone.isDirty && phone.phoneError;

  const onClickHandler = () => {
    nextStep();
  };

  const onEmailChangeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    email.onChange(e);
  };
  const onEmailBlurHandler = () => {
    email.onBlur();
  };
  const onPhoneChangeHandler = (e) => {
    updateFormData({
      [e.target.id]: e.target.value,
    });
    phone.onChange(e);
  };
  const onPhoneBlurHandler = () => {
    phone.onBlur();
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <h1 className="order-form-header">Contact information</h1>
        <div className="order-form-list">
          <div className="order-form-item">
            <InputForm
              label="Email Address"
              id="email"
              type="email"
              placeholder="email@example.com"
              onChange={onEmailChangeHandler}
              onBlur={onEmailBlurHandler}
              isEmpty={isEmailEmpty}
              isValid={isEmailValid}
            />
          </div>
          <div className="order-form-item">
            <InputForm
              label="Phone Number"
              type="tel"
              id="phone"
              placeholder="89995553311"
              onChange={onPhoneChangeHandler}
              onBlur={onPhoneBlurHandler}
              isEmpty={isPhoneEmpty}
              isValid={isPhoneValid}
            />
          </div>
          <Button
            disabled={!email.isInputValid || !phone.isInputValid}
            buttonType="inverted"
            onClick={onClickHandler}
          >
            Continue to Payment information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
