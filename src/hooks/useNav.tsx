import React, { useState } from "react";

export const useNav = (): [number, (index: number) => void] => {
  const [nav, setNav] = useState(0);
  const handleNav = (index: number) => {
    setNav(index);
  };
  return [nav, handleNav];
};
