import React, { useContext, useMemo } from "react";

import { AuthContext } from "../../store/authContext";

import "./Home.scss";

const Home = () => {
  const { userData } = useContext(AuthContext);

  const message = useMemo(() => {
    const loginCount = userData?.user.loginCount;
    if (loginCount > 0) return `It’s your ${loginCount}th login.`;
    else if (userData) return "Welcome";
  }, [userData]);

  return (
    <div className="home">
      <h1>{message}</h1>
    </div>
  );
};

export default Home;
