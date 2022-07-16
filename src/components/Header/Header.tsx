import React from "react";
import { ReactComponent as IconLogo } from "../../assets/shared/logo.svg";
import { ReactComponent as IconMenu } from "../../assets/shared/icon-hamburger.svg";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { headerProps } from "../../types/type";
const Header = ({ handleBackground }: headerProps) => {
  const [modal, handleOpen, handleClose] = useModal();
  return (
    <div className="header">
      {/* <IconLogo viewBox="0 0 48 48" className="logoasd"></IconLogo> */}
      <IconLogo />
      <div className="header__navbar">navbar</div>
      {/* <IconMenu viewBox="0 0 24 24" className="menuasd"></IconMenu> */}
      <IconMenu onClick={handleOpen} />
      <Modal
        modal={modal}
        handleClose={handleClose}
        handleBackground={handleBackground}
      />
    </div>
  );
};

export default Header;
