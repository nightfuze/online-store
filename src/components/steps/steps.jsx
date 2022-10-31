import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import ContactInformation from "../contact-information/contact-information";
import PaymentInformation from "../payment-information/payment-information";
import ShippingInformation from "../shipping-information/shipping-information";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Steps = () => {
  const { step, resetStep } = useContext(OrderContext);

  const onClickHandler = () => {
    resetStep();
  };

  switch (step) {
    case 1:
      return <ContactInformation />;
    case 2:
      return <PaymentInformation />;
    case 3:
      return <ShippingInformation />;
    case 4:
      return (
        <div>
          <h1>The order was successfully completed!</h1>
          <Link to="/">
            <Button onClick={onClickHandler}>Back to store</Button>
          </Link>
        </div>
      );
    default:
      return (
        <div>
          Error after order confirmation. Your information is invalid or try
          again later
        </div>
      );
  }
};

export default Steps;
