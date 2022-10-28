import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import { Animated } from "react-animated-css";
import ResumePdf from "../images/Resume.pdf";

const Resume = () => {
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
              animationInDuration={3000}
              animationOutDuration={3000}
              isVisible={true}
            >
              <span class="block">
                {" "}
                <h1 class="text-4xl text-center font-semibold text-slate-400">
                  Resume
                </h1>
                <h1 class="text-2xl text-center font-semibold text-stone-600 hover:text-stone-400">
                  <a href={ResumePdf}>Click here for PDF</a>
                </h1>
              </span>
            </Animated>
          </div>
          <dl class="mt-10 lg:space-y-0 grid md:grid-cols-3 lg:gap-8 gap-2 md:gap-0 space-y-0">
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <div class="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-slate-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <h1 class="text-2xl font-semibold text-stone-500 bg-stone-100">
                    EXPERIENCE
                  </h1>
                </Animated>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <p class="text-stone-600 font-semibold">JR DEVELOPER</p>
                </Animated>
                <div class="p-2"></div>
                <ul class="list-disc">
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Developed custom websites to meet individual and client
                    needs.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Verified front-end code functionality across browsers and
                    platforms.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Demonstrated ability to manage multiple tasks while
                    remaining adaptable and flexible.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Wrote well-designed, testable code.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Developed databases that supported Web applications and Web
                    sites.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Performed and directed Web site updates.
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Recommended and implemented performance improvements.
                  </li>
                </ul>
              </dt>
            </div>

            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <div class="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-slate-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <h1 class="text-2xl font-semibold text-stone-500 bg-stone-100">
                    SKILLS
                  </h1>
                </Animated>

                <ul class="list-disc pt-10">
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Design and Development
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Web Applications
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Bug Fixes
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Programming Languages
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Design Patterns and Principles
                  </li>
                  <li class="text-slate-400 text-sm list-disc py-2">
                    Usability and Accessibility
                  </li>
                </ul>
              </dt>
            </div>

            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <div class="flex justify-center pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-slate-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>

                <Animated
                  animationIn="fadeIn"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <h1 class="text-2xl font-semibold text-stone-500 bg-stone-100">
                    EDUCATION
                  </h1>
                </Animated>

                <ul class="pt-10">
                  <li class="text-stone-600 font-semibold bg-stone-100">
                    HIGH SCHOOL DIPLOMA
                  </li>
                  <li class="text-slate-400 text-sm py-2 pb-5">
                    Washburn Academy
                  </li>
                  <li class="text-stone-600 font-semibold bg-stone-100">
                    UCF | FULL STACK DEVELOPER
                  </li>
                  <li class="text-slate-400 text-sm py-2">In progress</li>
                </ul>
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

export default Resume;
