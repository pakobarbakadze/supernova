import React from "react";

import useForm from "../../hooks/useForm";
import useRegisterUser from "./hooks/useRegisterUser";
import Form from "../../components/Form/Form";

const Register = () => {
  const { onChange, onSubmit, values } = useForm(undefined, {
    username: "",
    email: "",
    password: "",
  });

  const { registerUser } = useRegisterUser(values);

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="username"
          placeholder="username"
        ></input>
        <input onChange={onChange} name="email" placeholder="email"></input>
        <input
          onChange={onChange}
          name="password"
          placeholder="password"
        ></input>
      </Form>
      <button onClick={registerUser}>Submit</button>
    </div>
  );
};

export default Register;
