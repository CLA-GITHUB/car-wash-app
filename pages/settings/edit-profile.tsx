import React from "react";
import Layout from "../../components/Layout";
import EditProfile from "../../components/settings-screen/EditProfile";

const ProfileEdit: React.FC = ({}) => {
  return (
    <Layout href='/settings/edit-profile'>
      <EditProfile />
    </Layout>
  );
};
export default ProfileEdit;
