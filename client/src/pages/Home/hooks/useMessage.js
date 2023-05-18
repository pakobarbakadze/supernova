import { useMemo } from "react";

const useMessage = (userData, registeredUserCount) => {
  const userLoginCounterMessage = useMemo(() => {
    const loginCount = userData?.user.loginCount;
    if (loginCount > 0) return `It’s your ${loginCount}th login.`;
    else if (userData) return "Welcome";
  }, [userData]);

  const luckyUserMessage = useMemo(() => {
    return registeredUserCount > 3 ? "You’re lucky person :)" : null;
  }, [registeredUserCount]);

  return { userLoginCounterMessage, luckyUserMessage };
};

export default useMessage;
