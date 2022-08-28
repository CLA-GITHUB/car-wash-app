import * as React from "react";
import Card from "./Card";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}: HomeScreenProps) => {
  return (
    <div className='pb-28'>
      <div>
        <p className='py-4'>History</p>
        <div className='space-y-3'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
