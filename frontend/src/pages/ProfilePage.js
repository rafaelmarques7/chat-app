import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getUserInfo } from "../lib/backend";
import { useParams } from "react-router-dom";
import { Profile } from "../components/profile/Profile";

export const ProfilePage = () => {
  const { idUser } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { res } = await getUserInfo(idUser);
      if (res) {
        setUserInfo(res);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Profile userInfo={userInfo} />
    </Layout>
  );
};
