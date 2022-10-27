import React, { useContext, useRef } from "react";
import { OrderContext } from "../../contexts/order-context";
import Button from "../button/button";

import "./shipping-information.scss";

const ShippingInformation = () => {
  const { updateFormData, nextStep, formData } = useContext(OrderContext);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const zipCodeRef = useRef();

  const onClickHandler = () => {
    const data = {
      ...{ [firstNameRef.current.id]: firstNameRef.current.value },
      ...{ [lastNameRef.current.id]: lastNameRef.current.value },
      ...{ [addressRef.current.id]: addressRef.current.value },
      ...{ [zipCodeRef.current.id]: zipCodeRef.current.value },
    };
    updateFormData(data);
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
            defaultValue={formData.firstName}
            ref={firstNameRef}
          />
        </div>
        <div className="order-form-item">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            defaultValue={formData.lastName}
            ref={lastNameRef}
          />
        </div>
        <div className="order-form-item">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            defaultValue={formData.address}
            ref={addressRef}
          />
        </div>
        <div className="order-form-item">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            type="text"
            id="zipCode"
            defaultValue={formData.zipCode}
            ref={zipCodeRef}
          />
        </div>
      </div>
      <Button buttonType="inverted" onClick={onClickHandler}>
        confirm information
      </Button>
    </div>
  );
};

export default ShippingInformation;
