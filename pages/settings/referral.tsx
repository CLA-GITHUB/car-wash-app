import React from "react";
import Layout from "../../components/Layout";
import Referal from "../../components/settings-screen/Referal";
const Referral: React.FC = ({}) => {
  return (
    <Layout href='/settings/referral' title='Referral - Crogam tech'>
      <Referal />
    </Layout>
  );
};
export default Referral;
