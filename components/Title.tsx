import React from "react";

interface TitleProps {
  children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
  return (
    <p className='font-bold text-2xl text-[#AAADBB] text-center pt-10 mb-8'>
      {children}
    </p>
  );
};

export default Title;
