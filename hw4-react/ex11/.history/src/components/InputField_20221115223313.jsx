import React, { useContext, useState, useEffect } from "react";
import FormContext from "./FormContext";

const splitCamelCase = (s) =>
  s
    .replace(/([a-z0-9])([A-Z0-9])/g, "$1 $2")
    .replace(/^([a-z])/, (x) => x.toUpperCase());

const InputField = (props) => {
  const form = useContext(FormContext);

  const [error, setError] = useState("");

  const { onValidate, name, label, ...otherProps } = props;

  let value = form.value && form.value(name);

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const setInvalid = form.setInvalid;

  useEffect(() => {
    if (setInvalid) {
      setInvalid(name, error);
    }
  }, [setInvalid, name, error]);

  if (!form.value) {
    return "InputField should be wrapped in a form";
  }

  return <div>InputField</div>;
};

export default InputField;