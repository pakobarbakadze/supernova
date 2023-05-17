import React, { useContext } from "react";

import { AuthContext } from "../../store/authContext";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <h1>{userData?.user.username}</h1>
    </div>
  );
};

export default Home;