import * as React from "react";
import Card from "./Card";
import FormModal from "./FormModal";
import Title from "./Title";

interface CarsScreenProps {}

const CarsScreen: React.FC<CarsScreenProps> = ({}: CarsScreenProps) => {
  return (
    <div className='pb-28'>
      <Title>Added vehicles</Title>
      <div className='sticky top-0 left-0 right-0 z-50 mb-4'>
        <FormModal />
      </div>
      <div className='space-y-3'>
        <Card cars />
        <Card cars />
        <Card cars />
      </div>
    </div>
  );
};
export default CarsScreen;
