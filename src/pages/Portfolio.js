import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import StoryKeeper from "../images/storynew.png";
import RunBuddy from "../images/RunBuddy.png";
import WebQuiz from "../images/webquiz.png";
import Horiseon from "../images/Horiseon.png";
import TechBlog from "../images/techblog.png";
import NowWereCookin from "../images/NowWereCookin.png";

import { Animated } from "react-animated-css";

const Portfolio = () => {
  return (
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="py-10 bg-stone-200">
        <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
          <head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            ></link>
          </head>

          <div class="container mx-auto flex justify-center bg-stone-200">
            <Animated
              animationIn="fadeIn"
              animationOut="fadeOut"
              animationInDuration={3000}
              animationOutDuration={3000}
              isVisible={true}
            >
              <span class="block">
                {" "}
                <h1 class="text-4xl text-center font-semibold text-slate-400 bg-stone-200">
                  Portfolio
                </h1>
              </span>
            </Animated>
          </div>
          <dl class="mt-20 lg:space-y-0 grid grid-cols-2 lg:gap-8 gap-2 md:gap-0 space-y-0 ">
            <div class="border bg-stone-100 md:p-10 p-5 rounded-lg">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://storykeeper-book-app.herokuapp.com/"
                >
                  <img src={StoryKeeper}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800 hover:opacity-80">
                    The Story Keeper
                  </p>
                </a>
              </dt>
            </div>
            <div class="border rounded-lg bg-stone-100 md:p-10 p-5">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://chloebyrnes.github.io/runbuddy2/"
                >
                  <img src={RunBuddy}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800">
                    Run Buddy
                  </p>
                </a>
              </dt>
            </div>
            <div class="border rounded-lg bg-stone-100 md:p-10 p-5">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://chloebyrnes.github.io/-Horiseon-Accessibility-Changes/"
                >
                  <img src={Horiseon}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800">
                    Horiseon
                  </p>
                </a>
              </dt>
            </div>
            <div class="border rounded-lg bg-stone-100 md:p-10 p-5">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://chloebyrnes.github.io/web-quiz/"
                >
                  <img src={WebQuiz}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800">
                    Web Quiz
                  </p>
                </a>
              </dt>
            </div>

            <div class="border rounded-lg bg-stone-100 md:p-10 p-5">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://kristafrancis.github.io/now-were-cookin/"
                >
                  <img src={NowWereCookin}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800">
                    Now We're Cookin
                  </p>
                </a>
              </dt>
            </div>

            <div class="border rounded-lg bg-stone-100 md:p-10 p-5">
              <dt class="">
                <a
                  class="hover:opacity-80"
                  href="https://tech-blog-module-14-chloe.herokuapp.com/"
                >
                  <img src={TechBlog}></img>

                  <p class="text-center mt-8 md:text-2xl text-gray-500 text-lg leading-6 font-bold text-stone-800">
                    The Tech Blog
                  </p>
                </a>
              </dt>
            </div>
          </dl>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
