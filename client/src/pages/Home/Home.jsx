import React, { useContext } from "react";

import { AuthContext } from "../../store/authContext";
import useUsersRegistered from "../../hooks/useUsersRegistered";

import "./Home.scss";
import useMessage from "./hooks/useMessage";

const Home = () => {
  const { userData } = useContext(AuthContext);
  const { registeredUserCount } = useUsersRegistered();
  const { userLoginCounterMessage, luckyUserMessage } = useMessage(
    userData,
    registeredUserCount
  );

  return (
    <div className="home">
      <h1>{userLoginCounterMessage}</h1>
      <h2>{luckyUserMessage}</h2>
      <h2>{`Total users registered: ${registeredUserCount}`}</h2>
    </div>
  );
};

export default Home;
