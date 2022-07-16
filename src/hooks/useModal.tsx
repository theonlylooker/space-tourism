import React, { useState } from "react";

export const useModal = (): [boolean, () => void, () => void] => {
  const [modal, setModal] = useState<boolean>(false);
  const handleClose = () => setModal(false);
  const handleOpen = () => setModal(true);
  return [modal, handleOpen, handleClose];
};
