import React from "react";
import { createContext, useState } from "react";

export const OrderContext = createContext({
  step: 1,
  formData: {},
  updateFormData: () => {},
  goToStep: () => {},
  resetStep: () => {},
});

export const OrderProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const updateFormData = (newData) => setFormData({ ...formData, ...newData });
  const goToStep = (n) => setStep(Number(n));
  const resetStep = () => setStep(1);

  const value = {
    step,
    nextStep,
    formData,
    updateFormData,
    goToStep,
    resetStep,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
