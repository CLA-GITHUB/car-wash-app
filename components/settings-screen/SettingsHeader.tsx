import React from "react";
import { FaCheckCircle, FaUser } from "react-icons/fa";
import Button from "../Button";
interface Props {
  name: string;
}

const SettingsHeader: React.FC<Props> = ({ name }: Props) => {
  return (
    <div>
      <div className='flex justify-between items-center space-y-3'>
        <div className='bg-gray-300 w-14 h-14 flex justify-center items-center rounded-full'>
          <FaUser className='text-4xl text-[#4D586F]' />
        </div>
        <div>
          <Button buttonType='button'>Edit profile</Button>
        </div>
      </div>
      <div className='flex items-center space-x-1 mt-2 font-semibold text-sm'>
        <p>{name}</p>
        <FaCheckCircle className=' text-green-400' />
      </div>
    </div>
  );
};

export default SettingsHeader;
