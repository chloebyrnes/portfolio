import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import About from "../components/About/About.js";

const index = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <dl class="mt-20 lg:space-y-0 lg:grid lg:grid-cols-3 grid grid-cols-2 lg:gap-8 gap-2 md:gap-0 space-y-0">
        <div class="border  md:p-10 p-5 rounded-3xl">
          <dt class="">
            <p>Test</p>

            <About />
          </dt>
        </div>
      </dl>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
