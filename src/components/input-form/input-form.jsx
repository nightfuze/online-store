import React, { Fragment } from "react";

const InputForm = (props) => {
  const { label, id, type, placeholder, onChange, onBlur, isEmpty, isValid } =
    props;
  return (
    <Fragment>
      <label className="order-form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="order-form-input"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {isEmpty && (
        <p className="order-form-input-error">The field cannot be empty</p>
      )}
      {isValid && <p className="order-form-input-error">Invalid {label}</p>}
    </Fragment>
  );
};

export default InputForm;
