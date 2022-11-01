import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";

import "./notify-message.scss";

const NotifyMessage = (props) => {
  const { notifyMessage, onClick } = props;
  let message = "";
  switch (notifyMessage) {
    case "emptyCart":
      message = "Your cart is Empty";
      break;
    case "successOrder":
      message = "The order was successfully completed!";
      break;
    case "errorOrder":
      message =
        "Error after order confirmation. Your information is invalid or try again later";
    default:
      message = "Unknown error";
      break;
  }
  return (
    <div className="notify-message">
      <h1>{message}</h1>
      <Link to="/">
        <Button onClick={onClick}>go back to store</Button>
      </Link>
    </div>
  );
};

export default NotifyMessage;
