import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  //Handler to authenticate user on form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginState; // Destructuring email & password from loginState object
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      window.location.href = '/main';
    } else {
      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <form className="mt-8 space-y-6 w-1/3" style={{marginLeft: "455px"}} onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
