import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import About from "../components/About/About.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Animated } from "react-animated-css";

const index = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </head>

      <HeaderBar />
      <div class="p-8"></div>
      <div class="flex justify-center">
        <dt class="grid place-items-center pt-10 bg-stone-50 w-5/6 rounded-2xl">
          <h1 class="md:text-4xl text-2xl font-medium text-slate-400 tracking-tight md:space-y-2 pb-8">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={3000}
              animationOutDuration={3000}
              isVisible={true}
            >
              <span class="block">Hello!</span>
            </Animated>
          </h1>

          <h1 class="text-base font-medium text-slate-400 tracking-tight md:space-y-2 pb-8">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={3000}
              animationOutDuration={3000}
              isVisible={true}
            >
              <p>Welcome to my portfolio!</p>
              <p>This portfolio is everchanging since I am still in school,</p>
              <p>
                new projects and work will be added as a progress through my
                classes.
              </p>
              <p class="pt-5">
                Feel free to contact me through my contact form.{" "}
              </p>
            </Animated>
          </h1>

          <AnchorLink
            href="#About"
            class="relative inline-flex items-center justify-center p-6 px-16 py-4 overflow-hidden font-medium transition duration-300 ease-out rounded-lg drop-shadow-lg group hover:opacity-70"
          >
            <span class="absolute inset-0 w-full h-full bg-stone-100"></span>

            <div class="sm:flex justify-center text-gray-600 relative z-20 flex items-center text-sm gap-2 cursor-pointer">
              <span class="">Learn more about me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </AnchorLink>
          <div class="p-8"></div>
        </dt>
      </div>

      <div id="About">
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
