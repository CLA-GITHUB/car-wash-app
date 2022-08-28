import * as React from "react";
import {
  RiCarWashingFill,
  RiCarFill,
  RiHome4Fill,
  RiSettings4Fill,
} from "react-icons/ri";
import { Navigation } from "../pages";

interface FooterProps {
  navigation: Navigation;
  ToggleNavigation: any;
}

const Footer: React.FC<FooterProps> = ({ ToggleNavigation, navigation }) => {
  const iconContainerStyle: string =
    "flex flex-col justify-center items-center space-y-1 cursor-pointer";
  const iconStyle: string = "text-xl";
  const textStyle: string = "text-sm text-center";
  const active: string = "text-black font-semibold";
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-[#ffffffdd] max-w-lg mx-auto rounded-t-2xl'>
      <div className='max-w-md mx-auto py-3 px-2 '>
        <div className='flex justify-between items-center'>
          <div
            className={`${iconContainerStyle} ${
              navigation.home ? active : "text-gray-600"
            }`}
            onClick={() => ToggleNavigation("home")}
          >
            <RiHome4Fill className={`${iconStyle}`} />
            <p className={`${textStyle}`}>Home</p>
          </div>

          <div
            className={`${iconContainerStyle} ${
              navigation.cars ? active : "text-gray-600"
            }`}
            onClick={() => ToggleNavigation("cars")}
          >
            <RiCarFill className={`${iconStyle}`} />
            <p className={`${textStyle}`}>Cars</p>
          </div>

          <div
            className={`${iconContainerStyle} ${
              navigation.wash ? active : "text-gray-600"
            }`}
            onClick={() => ToggleNavigation("wash")}
          >
            <RiCarWashingFill className={`${iconStyle}`} />
            <p className={`${textStyle}`}>Book wash</p>
          </div>

          <div
            className={`${iconContainerStyle} ${
              navigation.settings ? active : "text-gray-600"
            }`}
            onClick={() => ToggleNavigation("settings")}
          >
            <RiSettings4Fill className={`${iconStyle}`} />
            <p className={`${textStyle}`}>Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
