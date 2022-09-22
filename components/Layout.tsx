import * as React from "react";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  index?: boolean;
  href?: string;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, href, title }) => {
  return (
    <div className='bg-[#E8E9EF] min-h-screen max-w-screen px-6 font-saria'>
      <Head>
        <title>{`${title ? title : "Page title"}`}</title>
      </Head>
      <div className='max-w-md mx-auto'>
        {children}
        <Footer href={href ? href : "/"} />
      </div>
    </div>
  );
};

export default Layout;
