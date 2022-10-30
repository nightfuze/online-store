import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
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
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    isEmpty || minLengthError || emailError || phoneError
      ? setIsInputValid(false)
      : setIsInputValid(true);
  }, [isEmpty, minLengthError, emailError, phoneError]);

  return { isEmpty, minLengthError, emailError, phoneError, isInputValid };
};

export default useValidation;
