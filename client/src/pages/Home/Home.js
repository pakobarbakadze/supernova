import React, { useContext } from "react";

import { AuthContext } from "../../store/authContext";

const Home = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      <h1>{userData.user.username}</h1>
    </div>
  );
};

export default Home;
