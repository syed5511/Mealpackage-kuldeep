import React from "react";

import Header from "./header";
import FollowUs from "./followus";
import Footer from "./footer";
import FooterTerms from "./footer_terms";
import menuItems from "../config/menuItems";
import useIsMobile from "../utils/useIsMobile";

const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <Header isMobile={isMobile} menuItems={menuItems} isLogin={true} />
      {children}
      {!isMobile && (
        <>
          <FollowUs />
          <Footer />
        </>
      )}
      <FooterTerms isMobile={isMobile} />
    </>
  );
};

export default Layout;
