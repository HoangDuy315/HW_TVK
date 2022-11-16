import React, { useEffect, useState } from "react";
import SimpleForm from "./SimpleForm";
import InputField from "./InputField";

const FormExample0 = () => {
  const [formFields, setFormFields] = useState(true);
  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState(true);

  return <div>FormExample0</div>;
};

export default FormExample0;
