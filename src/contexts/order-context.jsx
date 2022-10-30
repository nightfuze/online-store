import React from "react";
import { createContext, useState } from "react";

export const OrderContext = createContext({
  step: 1,
  formData: {},
  updateFormData: () => {},
  goToStep: () => {},
  resetStep: () => {},
  isValidFormData: () => {},
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

  const nextStep = () => setStep(step + 1);
  const updateFormData = (newData) => setFormData({ ...formData, ...newData });
  const goToStep = (n) => setStep(Number(n));
  const resetStep = () => setStep(1);
  const isValidFormData = () =>
    Object.values(formData).filter((elem) => elem.length).length ===
    Object.keys(formData).length;

  const value = {
    step,
    nextStep,
    formData,
    updateFormData,
    goToStep,
    resetStep,
    isValidFormData,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
