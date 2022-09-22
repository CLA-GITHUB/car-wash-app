import React from "react";
import Layout from "../../components/Layout";
import SettingsScreen from "../../components/SettingsScreen";

const Settings: React.FC<{}> = () => {
  return (
    <Layout href='/settings'>
      <SettingsScreen />;
    </Layout>
  );
};

export default Settings;
