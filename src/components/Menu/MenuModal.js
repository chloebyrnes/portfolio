import * as React from "react";

const MenuModal = ({ open, setOpen }) => {
  return (
    <div>
      {open ? (
        <div class="z-20 opacity-100 fixed inset-0 ease-out duration-300">
          <div
            onClick={() => setOpen(false)}
            class="absolute inset-0 bg-gray-500 opacity-80"
          ></div>
        </div>
      ) : (
        <div class="opacity-0 fixed ease-in duration-300"></div>
      )}
    </div>
  );
};

export default MenuModal;
