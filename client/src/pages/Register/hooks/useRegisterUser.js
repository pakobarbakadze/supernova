import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { AuthContext } from "../../../store/authContext";

const REGISTER_USER = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
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

const useRegisterUser = (values) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [registerUser] = useMutation(REGISTER_USER, {
    update(proxy, { data: { register: userData } }) {
      login(userData);
      navigate("/");
    },
    variables: { ...values },
  });

  return { registerUser };
};

export default useRegisterUser;
