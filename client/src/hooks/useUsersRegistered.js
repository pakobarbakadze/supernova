import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { gql, useQuery } from "@apollo/client";

const socket = io("http://localhost:5000");

const GET_REGISTERED_USERS = gql`
  query Query {
    users {
      _id
    }
  }
`;

const useUsersRegistered = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, error, data, refetch } = useQuery(GET_REGISTERED_USERS);
  const [registeredUserCount, setRegisteredUserCount] = useState();

  useEffect(() => {
    if (data?.users) setRegisteredUserCount(data.users.length);
  }, [data]);

  useEffect(() => {
    // Listen for 'userCount' event
    socket.on("userCount", (count) => {
      setRegisteredUserCount(count);
    });

    // Refetch the query when the component mounts
    refetch();

    return () => {
      socket.off("userCount");
    };
  }, [refetch]);

  return { registeredUserCount };
};

export default useUsersRegistered;
