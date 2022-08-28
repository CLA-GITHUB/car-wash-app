import { useRouter } from "next/router";
import React from "react";
interface CTALinkProps {
  children: React.ReactNode;
  href: string;
}
const CTALink: React.FC<CTALinkProps> = ({ children, href }: CTALinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className='bg-[#E7EAFF] rounded-full border-2 border-gray-800 px-3 py-1 text-gray-800 text-sm'
    >
      {children}
    </button>
  );
};

export default CTALink;
