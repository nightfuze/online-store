import React, { Fragment, useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import ContactInformation from "../contact-information/contact-information";
import PaymentInformation from "../payment-information/payment-information";
import ShippingInformation from "../shipping-information/shipping-information";
import NotifyMessage from "../notify-message/notify-message";
import ProgressBar from "../progress-bar/progress-bar";

const stepNames = ["contact", "payment", "shipping"];

const Steps = () => {
  const { step, resetStep } = useContext(OrderContext);

  const onClickHandler = () => {
    resetStep();
  };

  switch (step) {
    case 1:
      return (
        <Fragment>
          <ProgressBar stepNames={stepNames} step={step} />{" "}
          <ContactInformation />
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <ProgressBar stepNames={stepNames} step={step} />{" "}
          <PaymentInformation />
        </Fragment>
      );
    case 3:
      return (
        <Fragment>
          <ProgressBar stepNames={stepNames} step={step} />{" "}
          <ShippingInformation />
        </Fragment>
      );
    case 4:
      return (
        <NotifyMessage notifyMessage="successOrder" onClick={onClickHandler} />
      );
    default:
      return <NotifyMessage notifyMessage="errorOrder" />;
  }
};

export default Steps;
