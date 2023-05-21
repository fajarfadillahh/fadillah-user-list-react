import React, { useEffect, useState } from "react";

// import components & parts
import Layout from "../components/layout/Layout";
import UserList from "../parts/user/UserList";

// import api
import { getAllUsers } from "../api/fetching";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers()
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log({ data: users });

  return (
    <Layout>
      <UserList />
    </Layout>
  );
};

export default User;
