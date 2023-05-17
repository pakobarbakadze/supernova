import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../../../store/authContext";

const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

const useLoginUser = (values) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState();

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { login: userData } }) {
      login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      setError(graphQLErrors[0]);
    },
    variables: { ...values },
  });

  return { loginUser, loading, error };
};

export default useLoginUser;
