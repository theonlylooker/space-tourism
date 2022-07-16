import React, { useState } from "react";
import { LayoutProps } from "../../types/type";
import Header from "../Header/Header";

const Layout = ({ children }: LayoutProps) => {
  const [background, setBackground] = useState("home");
  const handleBackground = (adress: string) => {
    setBackground(adress);
  };
  return (
    <div className="layout">
      <div className={`layout__background bg-${background}`}></div>
      <Header handleBackground={handleBackground} />
      {children}
    </div>
  );
};

export default Layout;
