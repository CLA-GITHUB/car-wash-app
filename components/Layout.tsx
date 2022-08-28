import * as React from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  index?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, index }: LayoutProps) => {
  return (
    <div className='bg-[#E8E9EF] min-h-screen w-screen px-2 font-saria'>
      {children}
    </div>
  );
};

export default Layout;
