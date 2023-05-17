import React, { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import Button from "../Button/Button";

import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userData, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1>Authentication</h1>
      {!userData && (
        <Button text={"Log In"} onClick={() => navigate("/login")} />
      )}
      {userData && <Button text={"Log Out"} onClick={() => logout()} />}
    </div>
  );
};

export default Navbar;
