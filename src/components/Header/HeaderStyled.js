import React from "react";
import { bool, func } from "prop-types";

const HeaderStyled = ({ open, setOpen }) => {
  return (
    <div class="relative z-50 hover:opacity-80">
      {open ? (
        <span class="rounded-md">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            class="mr-4 inline-flex items-center justify-center rounded-md text-stone-900 hover:text-stone-500"
            id="close"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p class="text-xl pr-10">Close</p>
          </button>
        </span>
      ) : (
        <span class="rounded-md ">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            class="mt-1 py-2 "
            id="open"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <p class="text-xl pr-10 font-semibold">Menu</p>
          </button>
        </span>
      )}
    </div>
  );
};
HeaderStyled.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default HeaderStyled;
