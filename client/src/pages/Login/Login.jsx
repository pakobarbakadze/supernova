import React from "react";
import useForm from "../../hooks/useForm";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";
import Button from "../../components/Button/Button";
import useLoginUser from "./hooks/useLoginUser";
import { Link } from "react-router-dom";

const Login = () => {
  const { onChange, onSubmit, values } = useForm(undefined, {
    email: "",
    password: "",
  });

  const { loginUser, loading, error } = useLoginUser(values);

  return (
    <div>
      <Form onSubmit={onSubmit} header={"Login"}>
        <Input onChange={onChange} name="email" label="email" />
        <Input onChange={onChange} name="password" label="password" />
        <h3>
          Don't have an account? <Link to={"/register"}>Register.</Link>
        </h3>
        {error && <p>{error.message}</p>}
        <Button onClick={loginUser} text={"Submit"}></Button>
      </Form>
    </div>
  );
};

export default Login;
