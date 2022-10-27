import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import ContactInformation from "../../components/contact-information/contact-information";
import PaymentInformation from "../../components/payment-information/payment-information";
import ShippingInformation from "../../components/shipping-information/shipping-information";
import Steps from "../../components/steps/steps";
import { CartContext } from "../../contexts/cart-context";
import { OrderContext } from "../../contexts/order-context";

import "./order.scss";

const Order = () => {
  const { step, resetStep } = useContext(OrderContext);
  const { cartTotal, resetCartItems } = useContext(CartContext);

  const onClickHandler = () => {
    resetCartItems();
    resetStep();
  };

  switch (step) {
    case 1:
      return (
        <div>
          <Steps />
          <ContactInformation />
          <span>Total: ${cartTotal}</span>
        </div>
      );
    case 2:
      return (
        <div>
          <Steps />
          <PaymentInformation />
          <span>Total: ${cartTotal}</span>
        </div>
      );
    case 3:
      return (
        <div>
          <Steps />
          <ShippingInformation />
          <span>Total: ${cartTotal}</span>
        </div>
      );
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

export default Order;
