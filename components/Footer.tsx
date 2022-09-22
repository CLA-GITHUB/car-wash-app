import * as React from "react";
import {
  RiCarWashingFill,
  RiCarFill,
  RiHome4Fill,
  RiSettings4Fill,
} from "react-icons/ri";
import { useRouter } from "next/router";

interface FooterProps {
  href: string;
}

const Footer: React.FC<FooterProps> = ({ href }: FooterProps) => {
  const iconContainerStyle: string =
    "flex flex-col justify-center items-center space-y-1 cursor-pointer";
  const iconStyle: string = "text-2xl";
  const textStyle: string = "text-sm text-center tracking-wide";
  const atv: string = "text-black font-medium";
  const router = useRouter();
  const active = router.asPath === href ? atv : "text-gray-400";
  const handleNav = () => router.push(href);
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-[#ffffffdd] max-w-lg mx-auto rounded-t-lg'>
      <div className='max-w-md mx-auto py-4 px-5 '>
        <div className='flex justify-between items-center'>
          <div
            className={`${iconContainerStyle} ${active}`}
            onClick={handleNav}
          >
            <RiHome4Fill className={`${iconStyle} ${active}`} />
            <p className={`${textStyle}`}>Home</p>
          </div>

          <div
            className={`${iconContainerStyle} ${active}`}
            onClick={() => handleNav()}
          >
            <RiCarFill className={`${iconStyle} ${active}`} />
            <p className={`${textStyle}`}>Cars</p>
          </div>

          <div
            className={`${iconContainerStyle} ${active}`}
            onClick={() => handleNav()}
          >
            <RiCarWashingFill className={`${iconStyle} ${active}`} />
            <p className={`${textStyle}`}>Wash</p>
          </div>

          <div
            className={`${iconContainerStyle} ${active}`}
            onClick={() => handleNav}
          >
            <RiSettings4Fill className={`${iconStyle} ${active}`} />
            <p className={`${textStyle}`}>Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
