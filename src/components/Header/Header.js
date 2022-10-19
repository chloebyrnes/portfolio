import React, { useState } from "react";
import HeaderStyled from "./HeaderStyled";
import MenuStyled from "../Menu/MenuStyled";
import MenuModal from "../Menu/MenuModal";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <HeaderStyled open={open} setOpen={setOpen} />
      <MenuStyled open={open} setOpen={setOpen} />
      <MenuModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
