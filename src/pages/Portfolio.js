import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import StoryKeeper from "../images/storykeeper.png";
import RunBuddy from "../images/RunBuddy.png";
import NowWereCookin from "../images/NowWereCookin.png";
import Horiseon from "../images/Horiseon.png";

const Portfolio = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="py-10 bg-white">
        <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
          <div class="container mx-auto flex justify-center bg-white">
            <h1 class="text-4xl text-center font-semibold text-stone-800">
              Portfolio
            </h1>
          </div>
          <dl class="mt-20 lg:space-y-0 lg:grid lg:grid-cols-3 grid grid-cols-2 lg:gap-8 gap-2 md:gap-0 space-y-0">
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={StoryKeeper}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  The Story Keeper
                </p>
              </dt>
            </div>
            <div class="border md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={RunBuddy}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  Run Buddy
                </p>
              </dt>
            </div>
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={Horiseon}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  Horiseon
                </p>
              </dt>
            </div>
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={NowWereCookin}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  Now We're Cookin
                </p>
              </dt>
            </div>
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={StoryKeeper}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  The Story Keeper
                </p>
              </dt>
            </div>
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <img src={StoryKeeper}></img>

                <p class="text-center mt-8 md:text-2xl text-lg leading-6 font-bold text-stone-800">
                  The Story Keeper
                </p>
              </dt>
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

export default Portfolio;
