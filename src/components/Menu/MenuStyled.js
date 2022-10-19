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
              Page 1
            </a>

            <a
              href="/"
              class="block px-4 py-4 text-lg leading-5 text-gray-700 font-semibold hover:bg-cyan-50 hover:pl-8 hover:text-red-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Contact
            </a>
          </div>
          <div class="border-t border-gray-100"></div>
          <div class="pb-3">
            <div class="border-t border-gray-100"></div>
            <div class="flex items-center justify-center mt-2 px-4 py-4 ">
              <a
                href="https://github.com/chloebyrnes"
                class="text-gray-700  hover:opacity-70"
              >
                <span class="sr-only">Github</span>
                <svg
                  class="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/chloe-byrnes-693065242/"
                class="text-gray-700  hover:opacity-70"
              >
                <span class="sr-only">Linkedin</span>
                <svg
                  class="ml-4 h-8 w-8 pt-0.5 pb-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div class=""></div>
    )}
  </div>
);

export default MenuStyled;
