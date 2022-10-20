import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import About from "../components/About/About.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MainImg from "../images/computer2.jpg";

const index = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <dt class="grid place-items-center pt-40">
        <h1 class="md:text-4xl text-2xl font-medium text-gray-500 tracking-tight md:space-y-2 pt-0 md:pt-8 pb-8">
          <span class="block">Hello!</span>
        </h1>

        <AnchorLink
          href="#About"
          class="relative inline-flex items-center justify-center p-6 px-16 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group hover:opacity-70"
        >
          <span class="absolute inset-0 w-full h-full bg-white"></span>

          <div class="sm:flex justify-center text-gray-600 relative z-20 flex items-center text-base">
            <span class="">Learn more about me</span>
          </div>
        </AnchorLink>
        <div class="pb-72"></div>
        <div id="About"></div>
        <About />
      </dt>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
