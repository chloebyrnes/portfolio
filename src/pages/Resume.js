import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";

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
          <div class="container mx-auto flex justify-center bg-white">
            <h1 class="text-4xl text-center font-semibold text-stone-800">
              Resume
            </h1>
          </div>
          <dl class="mt-20 lg:space-y-0 grid grid-cols-3 lg:gap-8 gap-2 md:gap-0 space-y-0">
            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <h1 class="text-2xl font-semibold text-stone-800 bg-stone-100">
                  EXPERIENCE
                </h1>
                <p class="text-stone-700 font-semibold bg-stone-100">
                  JR DEVELOPER
                </p>
                <p class="text-stone-500">Freelance</p>
                <ul class="list-disc">
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Developed custom websites to meet individual and client
                    needs.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Verified front-end code functionality across browsers and
                    platforms.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Demonstrated ability to manage multiple tasks while
                    remaining adaptable and flexible.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Wrote well-designed, testable code.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Developed databases that supported Web applications and Web
                    sites.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Performed and directed Web site updates.
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Recommended and implemented performance improvements.
                  </li>
                </ul>
              </dt>
            </div>

            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <h1 class="text-2xl font-semibold text-stone-800 bg-stone-100">
                  SKILLS
                </h1>

                <ul class="list-disc pt-10">
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Design and Development
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Web Applications
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Bug Fixes
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Programming Languages
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Design Patterns and Principles
                  </li>
                  <li class="text-stone-800 text-sm list-disc py-2">
                    Usability and Accessibility
                  </li>
                </ul>
              </dt>
            </div>

            <div class="border  md:p-10 p-5 rounded-3xl">
              <dt class="">
                <h1 class="text-2xl font-semibold text-stone-800 bg-stone-100">
                  EDUCATION
                </h1>

                <ul class="pt-10">
                  <li class="text-stone-700 font-semibold bg-stone-100">
                    HIGH SCHOOL DIPLOMA
                  </li>
                  <li class="text-stone-800 text-sm py-2 pb-5">
                    Washburn Academy
                  </li>
                  <li class="text-stone-700 font-semibold bg-stone-100">
                    UCF | FULL STACK DEVELOPER
                  </li>
                  <li class="text-stone-800 text-sm py-2">In progress</li>
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
