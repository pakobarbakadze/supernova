import React from "react";

import useForm from "../../hooks/useForm";
import useRegisterUser from "./hooks/useRegisterUser";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";
import Button from "../../components/Button/Button";

const Register = () => {
  const { onChange, onSubmit, values } = useForm(undefined, {
    username: "",
    email: "",
    password: "",
  });

  const { registerUser, loading, error } = useRegisterUser(values);

  return (
    <div>
      <Form onSubmit={onSubmit} header={"Register"}>
        <Input onChange={onChange} name="username" label="username" />
        <Input onChange={onChange} name="email" label="email" />
        <Input onChange={onChange} name="password" label="password" />
        {error && <p>{error.message}</p>}
        <Button onClick={registerUser} text={"Submit"}></Button>
      </Form>
    </div>
  );
};

export default Register;
