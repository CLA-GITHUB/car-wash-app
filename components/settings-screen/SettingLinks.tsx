import React from "react";
import { AiFillGift, AiOutlineRight } from "react-icons/ai";

interface Props {
  text: string;
  subtext?: string;
}
const SettingLink: React.FC<Props> = ({ text, subtext }: Props) => {
  return (
    <div className='flex justify-between items-center bg-white p-4 rounded-lg drop-shadow-md hover:drop-shadow-lg cursor-pointer'>
      <div className='flex justify-center items-center'>
        <div className='w-12 h-12 bg-gray-100 flex justify-center items-center rounded-full'>
          <AiFillGift className='text-2xl' />
        </div>

        <div className='ml-3'>
          <p className='text-sm'>{text}</p>
          {subtext && <p className='text-xs text-gray-400'>{subtext}</p>}
        </div>
      </div>
      <AiOutlineRight />
    </div>
  );
};

export default SettingLink;
