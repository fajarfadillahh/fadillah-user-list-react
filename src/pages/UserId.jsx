import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import components & parts
import Layout from "../components/layout/Layout";
import Hero from "../parts/userid/Hero";

// import api
import { getUserId } from "../api/fetching";

const UserId = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUserId(id)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Layout>
      <Hero user={user} />
    </Layout>
  );
};

export default UserId;
