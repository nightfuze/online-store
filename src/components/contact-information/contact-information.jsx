import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";
import useInput from "../../hooks/useInput";

import Button from "../button/button";

import "./contact-information.scss";

const ContactInformation = () => {
  const { nextStep } = useContext(OrderContext);
  const email = useInput("", { isEmpty: true, isEmail: true });
  const phone = useInput("", { isEmpty: true, isPhone: true });

  const onClickHandler = () => {
    nextStep();
  };

  const onEmailChangeHandler = (e) => {
    email.onChange(e);
  };
  const onEmailBlurHandler = () => {
    email.onBlur();
  };
  const onPhoneChangeHandler = (e) => {
    phone.onChange(e);
  };
  const onPhoneBlurHandler = (e) => {
    phone.onBlur();
  };

  return (
    <div>
      <h1>Contact information</h1>
      <div>
        <form className="contact-form">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              onChange={onEmailChangeHandler}
              onBlur={onEmailBlurHandler}
            />
            {email.isDirty && email.isEmpty && (
              <div>The field cannot be empty</div>
            )}
            {email.isDirty && email.emailError && <div>Invalid email</div>}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="89995553311"
              onChange={onPhoneChangeHandler}
              onBlur={onPhoneBlurHandler}
            />
            {phone.isDirty && phone.isEmpty && (
              <div>The field cannot be empty</div>
            )}
            {phone.isDirty && phone.phoneError && <div>Invalid phone</div>}
          </div>
          <Button
            disabled={!email.isInputValid || !phone.isInputValid}
            buttonType="inverted"
            onClick={onClickHandler}
          >
            Continue to Payment information
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactInformation;
