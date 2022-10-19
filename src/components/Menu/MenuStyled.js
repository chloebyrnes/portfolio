import * as React from "react";

const MenuStyled = ({ open }) => (
  <div>
    {open ? (
      <div class="z-50 transition ease-out duration-75 absolute mt-6 w-48 -ml-36 md:-ml-20 shadow-lg">
        <div
          class="pt-6 pb-6 rounded-lg bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div class="rounded-lg pb-3 pt-3">
            <a
              href="/"
              class="block px-4 py-4 text-lg leading-5 text-gray-700 font-semibold hover:bg-cyan-50 hover:pl-8 hover:text-red-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Home
            </a>

            <a
              href="/"
              class="block px-4 py-4 text-lg leading-5 text-gray-700 font-semibold hover:bg-cyan-50 hover:pl-8 hover:text-red-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Portfolio
            </a>

            <a
              href="/"
              class="block px-4 py-4 text-lg leading-5 text-gray-700 font-semibold hover:bg-cyan-50 hover:pl-8 hover:text-red-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Contact
            </a>

            <a
              href="/"
              class="block px-4 py-4 text-lg leading-5 text-gray-700 font-semibold hover:bg-cyan-50 hover:pl-8 hover:text-red-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Resume
            </a>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="pb-3">
            <div class="border-t border-gray-100"></div>
          </div>
        </div>
      </div>
    ) : (
      <div class=""></div>
    )}
  </div>
);

export default MenuStyled;
