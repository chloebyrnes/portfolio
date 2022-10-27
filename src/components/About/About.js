import * as React from "react";
import AboutMe from "../../images/Chloe.jpg";

const About = () => {
  return (
    <main class="bg-stone-200">
      <div class="bg-novisBlue">
        <div class="md:py-5 xl:py-32 pb-10 md:p-0 p-5">
          <div class="max-w-5xl mx-auto">
            <div class="relative">
              <div class="relative">
                <div class="lg:grid lg:grid-cols-2">
                  <div class="prose prose-indigo prose-lg text-gray-500 lg:mt-0 px-8 md:px-0">
                    <img class="rounded-3xl w-10/12" src={AboutMe} alt="" />
                  </div>

                  <div class="mt-8 py-10 md:py-0 pb-20">
                    <h1 class="font-bold px-12 md:px-0 md:text-4xl text-2xl font-medium text-gray-500 tracking-tight md:space-y-2 pl-10 md:pl-0">
                      <span class="block">About me</span>
                    </h1>
                    <p class=" px-12 md:px-0 md:text-xl md:max-w-lg mt-5 text-stone-500 md:leading-relaxed pl-10 md:pl-0">
                      I recently decided to take up web development, I enrolled
                      in UCF's Full Stack Developer program to learn how to
                      create websites. I was interested to know, not only how to
                      create a good looking website, but how to make it
                      functional.
                    </p>
                    <p class=" px-12 md:px-0 md:text-xl md:max-w-lg mt-5 text-stone-500 md:leading-relaxed pl-10 md:pl-0">
                      Since enrolling, I've created multiple
                      applications/websites for practice. On my portfolio you
                      can take a peak at some things I've created since
                      beginning my classes.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed
             inset-x-0
             bottom-0"
      ></div>
    </main>
  );
};

export default About;
