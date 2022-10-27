import React, { useContext } from "react";
import { OrderContext } from "../../contexts/order-context";
import Button from "../button/button";

const Steps = () => {
  const { goToStep } = useContext(OrderContext);

  const onClickHandler = (e) => goToStep(e.target.value);

  return (
    <div>
      <Button onClick={onClickHandler} value={1}>
        Contact
      </Button>
      <Button onClick={onClickHandler} value={2}>
        Payment
      </Button>
      <Button onClick={onClickHandler} value={3}>
        Shipping
      </Button>
    </div>
  );
};

export default Steps;
