import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import AboutMe from "../images/Chloe.jpg";
import BookNook from "../images/book-nook.png";

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

      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div class="space-y-5 sm:space-y-4">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p class="text-base text-gray-500">
                {" "}
                <p>Welcome to my portfolio!</p>
                <p>
                  This portfolio is everchanging since I am still in school, new
                  projects and work will be added as a progress through my
                  classes.
                </p>
                <p class="pt-5">
                  Feel free to contact me through my contact form.{" "}
                </p>
              </p>
            </div>
            <div class="lg:col-span-2">
              <ul
                role="list"
                class="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                <li class="sm:py-8">
                  <div class="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                      <img
                        class="rounded-lg object-cover shadow-lg"
                        src={AboutMe}
                        alt=""
                      ></img>
                    </div>
                    <div class="sm:col-span-2">
                      <div class="space-y-4">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3>Chloe Byrnes</h3>
                          <p class="text-slate-600">Jr Developer</p>
                        </div>
                        <div class="text-lg">
                          <p class="text-gray-500 text-sm">
                            I recently decided to take up web development, I
                            enrolled in UCF's Full Stack Developer program to
                            learn how to create websites. I was interested to
                            know, not only how to create a good looking website,
                            but how to make it functional.
                            <br />
                            Since enrolling, I've created multiple
                            applications/websites for practice. On my portfolio
                            you can take a peak at some things I've created
                            since beginning my classes.{" "}
                          </p>
                        </div>
                        <ul role="list" class="flex space-x-5">
                          <li>
                            <a
                              href="mailto:chloebyrnesash@gmail.com"
                              class="text-gray-400 hover:text-gray-500"
                            >
                              <span class="sr-only">Email</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-5 h-5"
                              >
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/chloe-byrnes-693065242/"
                              class="text-gray-400 hover:text-gray-500"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="relative bg-gray-50 px-4 sm:px-6 lg:px-8 pb-20">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Check out my latest projects
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Group projects and/or classwork I've completed recently.
            </p>
          </div>
          <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="opacity-50 h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                ></img>{" "}
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block">
                    <p class="text-lg font-semibold text-gray-500">
                      Something exciting is coming...
                    </p>
                    <p class="mt-3 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://book-nook2.herokuapp.com/"
              class="animate-pulse hover:opacity-75"
            >
              <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="flex-shrink-0">
                  <img
                    class="h-48 w-full object-cover"
                    src={BookNook}
                    alt=""
                  ></img>{" "}
                </div>
                <div class="flex flex-1 flex-col justify-between bg-white p-6">
                  <div class="flex-1">
                    <p class="text-xl font-semibold text-gray-900">BookNook</p>
                    <p class="mt-3 text-sm text-gray-500">
                      This application is designed to provide a platform and
                      community for parents and/or teachers of young readers.
                      This platform is designed to allow parents to discover and
                      discuss new reads for their child based on their
                      individual reading level and interest. The main features
                      of this application include account registration,
                      searching for books through Google Books API, creating a
                      profile page where you can save books, have reading goals
                      for your child and add friends.
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img
                  class="opacity-50 h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                ></img>{" "}
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <a href="#" class="mt-2 block">
                    <p class="text-lg font-semibold text-gray-500">
                      Something exciting is coming...
                    </p>
                    <p class="mt-3 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default index;
