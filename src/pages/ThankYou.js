import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import { Animated } from "react-animated-css";

const ThankYou = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="py-10 bg-white">
        <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
          <head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            ></link>
          </head>
          <div class="container mx-auto flex justify-center bg-white">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1 class="text-4xl text-center font-semibold text-slate-400">
                Thank You!
              </h1>
              <h1 class="text-2xl pt-5 text-center font-semibold text-stone-400">
                I received your message, I will get back to you via email soon!
              </h1>
            </Animated>
          </div>

          <dl class="mt-10 lg:space-y-0 grid grid-cols-3 lg:gap-8 gap-2 md:gap-0 space-y-0">
            <div class=" md:p-10 p-5 rounded-3xl">
              <dt class=""></dt>
            </div>
          </dl>
        </div>
      </div>

      <div
        class="fixed
           inset-x-0
           bottom-0"
      >
        <Footer />
      </div>
    </div>
  );
};

export default ThankYou;
