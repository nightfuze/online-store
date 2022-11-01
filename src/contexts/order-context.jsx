import React from "react";
import { createContext, useState } from "react";

export const OrderContext = createContext({
  step: 1,
  formData: {},
  updateFormData: () => {},
  resetStep: () => {},
});

export const OrderProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    address: "",
    zipCode: "",
  });

  console.log(formData);

  const nextStep = () => setStep(step + 1);
  const updateFormData = (newData) => setFormData({ ...formData, ...newData });
  const resetStep = () => setStep(1);

  const value = {
    step,
    nextStep,
    formData,
    updateFormData,
    resetStep,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
