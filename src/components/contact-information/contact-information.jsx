import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";

import Button from "../button/button";

import "./contact-information.scss";

const ContactInformation = () => {
  const { nextStep, updateFormData, formData } = useContext(OrderContext);

  const onClickHandler = () => {
    updateFormData({
      ...{ [phoneRef.current.id]: phoneRef.current.value },
      ...{ [emailRef.current.id]: emailRef.current.value },
    });
    nextStep();
  };

  const emailRef = useRef();
  const phoneRef = useRef();

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
              required
              placeholder="example@email.com"
              defaultValue={formData.email}
              ref={emailRef}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="example: 89995553311"
              pattern="[0-9]{11}"
              title="required 10 numbers (example: 89995553311)"
              required
              defaultValue={formData.phone}
              ref={phoneRef}
            />
          </div>
          <Button buttonType="inverted" onClick={onClickHandler}>
            Continue to Payment information
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactInformation;
