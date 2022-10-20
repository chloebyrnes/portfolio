import * as React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-stone-200">
        <div class="static overflow-auto">
          <div class="max-w-7xl mx-auto py-4 md:px-4 flex items-center justify-center lg:px-8">
            <div class="md:mr-72 md:mt-0">
              <a
                href="/"
                class=" text-center md:text-base text-sm text-white hover:text-stone-500"
              >
                Home
              </a>
              <a
                href="/Contact"
                class="md:ml-6 ml-4 text-center md:text-base text-sm text-white hover:text-stone-500"
              >
                Contact
              </a>
            </div>

            <div class="md:ml-72 mr-0">
              <p class="md:text-center md:text-base text-sm text-white">
                © Copyright 2022
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
