import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expiryDateError, setExpiryDateError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isEmail":
          const reEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          reEmail.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case "isPhone":
          const rePhone = /^\d{10}$/;
          rePhone.test(String(value))
            ? setPhoneError(false)
            : setPhoneError(true);
          break;
        case "isFullName":
          const reFullName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
          reFullName.test(String(value))
            ? setFullNameError(false)
            : setFullNameError(true);
          break;
        case "isCardNumber":
          const reCardNumberError = /^[0-9]{4}-[0-9]{4}-[0-9]{4}$/i;
          reCardNumberError.test(String(value))
            ? setCardNumberError(false)
            : setCardNumberError(true);
          break;
        case "isExpiryDate":
          const reExpiryDateError = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
          reExpiryDateError.test(String(value))
            ? setExpiryDateError(false)
            : setExpiryDateError(true);
          break;
        case "isFirstName":
          const reFirstNameError = /^([\w\s]{3,})+$/i;
          reFirstNameError.test(String(value))
            ? setFirstNameError(false)
            : setFirstNameError(true);
          break;
        case "isLastName":
          const reLastNameError = /^([\w\s]{3,})+$/i;
          reLastNameError.test(String(value))
            ? setLastNameError(false)
            : setLastNameError(true);
          break;
        case "isZipCode":
          const reZipCodeError = /^\d{5}$/;
          reZipCodeError.test(String(value))
            ? setZipCodeError(false)
            : setZipCodeError(true);
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    isEmpty ||
    minLengthError ||
    emailError ||
    phoneError ||
    fullNameError ||
    cardNumberError ||
    expiryDateError ||
    firstNameError ||
    lastNameError ||
    zipCodeError
      ? setIsInputValid(false)
      : setIsInputValid(true);
  }, [
    isEmpty,
    minLengthError,
    emailError,
    phoneError,
    fullNameError,
    cardNumberError,
    expiryDateError,
    firstNameError,
    lastNameError,
    zipCodeError,
  ]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    phoneError,
    fullNameError,
    cardNumberError,
    expiryDateError,
    firstNameError,
    lastNameError,
    zipCodeError,
    isInputValid,
  };
};

export default useValidation;
