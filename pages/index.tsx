import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import HomeScreen from "../components/HomeScreen";
import WashScreen from "../components/WashScreen";
import SettingScreen from "../components/SettingsScreen";
import CarsScreen from "../components/CarsScreen";

export interface Navigation {
  home: boolean;
  cars: boolean;
  wash: boolean;
  settings: boolean;
}

const Home: NextPage = () => {
  const [navigation, setNavigation] = React.useState<Navigation>({
    home: true,
    cars: false,
    wash: false,
    settings: false,
  });
  const ToggleNavigation: any = (nav: string) => {
    switch (nav) {
      case "home":
        return setNavigation({
          home: true,
          cars: false,
          wash: false,
          settings: false,
        });
        break;
      case "cars":
        return setNavigation({
          home: false,
          cars: true,
          wash: false,
          settings: false,
        });
        break;

      case "wash":
        return setNavigation({
          home: false,
          cars: false,
          wash: true,
          settings: false,
        });

      case "settings":
        return setNavigation({
          home: false,
          cars: false,
          wash: false,
          settings: true,
        });

      default:
        setNavigation({
          home: true,
          cars: false,
          wash: false,
          settings: false,
        });
        break;
    }
  };
  return (
    <Layout index>
      <div className='max-w-md mx-auto'>
        <Head>
          <title>Dashboard - Crogam</title>
          <meta name='description' content='Welcome to your dashboard' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <p className='text-[150px] text-purple-900 tracking-wider font-bold'>
          Ayo is my GOAT!!!
        </p>
        {navigation.home && <HomeScreen />}
        {navigation.cars && <CarsScreen />}
        {navigation.wash && <WashScreen />}
        {navigation.settings && <SettingScreen />}
      </div>

      <Footer navigation={navigation} ToggleNavigation={ToggleNavigation} />
    </Layout>
  );
};

export default Home;
