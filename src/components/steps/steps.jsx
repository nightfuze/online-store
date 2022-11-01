import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import ContactInformation from "../contact-information/contact-information";
import PaymentInformation from "../payment-information/payment-information";
import ShippingInformation from "../shipping-information/shipping-information";
import NotifyMessage from "../notify-message/notify-message";

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
        <NotifyMessage notifyMessage="successOrder" onClick={onClickHandler} />
      );
    default:
      return <NotifyMessage notifyMessage="errorOrder" />;
  }
};

export default Steps;
