import React, { useState } from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";
import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [state, setState] = useState({});
  const [SubmitDisabled, setSubmitDisabled] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <div class="bg-gray-50">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <main class="overflow-hidden">
        <section
          class="pt-20 pb-36 relative bg-gray-50"
          aria-labelledby="contact-heading"
        >
          <div
            class="absolute h-1/2 w-full bg-warm-gray-50"
            aria-hidden="true"
          ></div>

          <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <svg
              class="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-warm-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative bg-white shadow-xl">
              <h2 id="contact-heading" class="sr-only">
                Contact Me
              </h2>

              <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="relative overflow-hidden bg-gradient-to-b from-gray-500 to-gray-600 py-10 px-6 sm:px-10 xl:p-12">
                  <div
                    class="pointer-events-none absolute inset-0 sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 h-full w-full"
                      width="343"
                      height="388"
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fill-opacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 h-full w-full"
                      width="359"
                      height="339"
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fill-opacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      class="absolute inset-0 h-full w-full"
                      width="160"
                      height="678"
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fill-opacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#fff"></stop>
                          <stop
                            offset="1"
                            stop-color="#fff"
                            stop-opacity="0"
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 class="text-lg font-medium text-white">
                    Contact information
                  </h3>

                  <dl class="mt-8 space-y-6">
                    <dt>
                      <span class="sr-only">Phone number</span>
                    </dt>
                    <dd class="flex text-base text-gray-50">
                      <svg
                        class="h-6 w-6 flex-shrink-0 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      <span class="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span class="sr-only">Email</span>
                    </dt>
                    <dd class="flex text-base text-gray-50">
                      <svg
                        class="h-6 w-6 flex-shrink-0 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <span class="ml-3">support@workcation.com</span>
                    </dd>
                  </dl>
                  <ul role="list" class="mt-8 flex space-x-12">
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        <span class="sr-only">Facebook</span>
                        <svg
                          class="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        <span class="sr-only">GitHub</span>
                        <svg
                          class="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a class="text-gray-200 hover:text-gray-100" href="#">
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="h-7 w-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 class="text-lg font-medium text-warm-gray-900">
                    Send me a message
                  </h3>
                  <form
                    name="contact-main"
                    method="post"
                    action="/ThankYou"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        for="first-name"
                        class="block text-sm font-medium text-warm-gray-900"
                      >
                        First name
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        ></input>{" "}
                      </div>
                    </div>
                    <div>
                      <label
                        for="last-name"
                        class="block text-sm font-medium text-warm-gray-900"
                      >
                        Last name
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        ></input>{" "}
                      </div>
                    </div>
                    <div>
                      <label
                        for="email"
                        class="block text-sm font-medium text-warm-gray-900"
                      >
                        Email
                      </label>
                      <div class="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        ></input>{" "}
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between">
                        <label
                          for="phone"
                          class="block text-sm font-medium text-warm-gray-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          class="text-sm text-warm-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autocomplete="tel"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          aria-describedby="phone-optional"
                        ></input>{" "}
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <label
                        for="subject"
                        class="block text-sm font-medium text-warm-gray-900"
                      >
                        Subject
                      </label>
                      <div class="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                        ></input>{" "}
                      </div>
                    </div>
                    <div class="sm:col-span-2">
                      <div class="flex justify-between">
                        <label
                          for="message"
                          class="block text-sm font-medium text-warm-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          class="text-sm text-warm-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div class="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          class="bg-gray-100 block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                          aria-describedby="message-max"
                        ></textarea>
                      </div>
                    </div>

                    <div class="sm:col-span-2 sm:flex sm:justify-end">
                      {SubmitDisabled === true ? (
                        <button
                          type="submit"
                          class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Loading...
                        </button>
                      ) : (
                        <button
                          class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-gray-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                          type="submit"
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <div class="">
        <div class="max-w-7xl mx-auto md:py-16 md:px-4">
          <div class="rounded-3xl relative bg-white shadow-xl">
            <h2 class="sr-only">Contact me</h2>

            <div class="rounded-3xl bg-gradient-to-r from-stone-300 to-stone-200 grid grid-cols-1 lg:grid-cols-3">
              <div class="relative overflow-hidden py-10 px-6 xl:p-12">
                <h3 class="pt-14 text-5xl font-medium text-slate-400">
                  Contact Information
                </h3>

                <dl class="mt-16 space-y-6">
                  <a
                    href="tel:727-612-6781"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-sky-900 hover:border-white"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span class="ml-3 hover:text-white text-slate-500 ">
                      (727) 612-6781
                    </span>
                  </a>

                  <a
                    href="mailto:chloebyrnesash@gmail.com"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-edward hover:border-white"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24 "
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-3 hover:text-white text-slate-500 ">
                      chloebyrnesash@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://github.com/chloebyrnes"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-edward hover:border-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-slate-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                      />
                    </svg>

                    <span class="ml-3 hover:text-white text-slate-500">
                      View my Github
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chloe-byrnes-693065242/"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-edward hover:border-white"
                  >
                    <svg
                      class="w-6 h-6 text-slate-500"
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

                    <span class="ml-3 hover:text-white text-slate-500">
                      View my LinkedIn
                    </span>
                  </a>
                </dl>
              </div>

              <div class="shadow-xl rounded-3xl bg-white md:mt-14 md:mr-14 m-8 md:mb-14 form md:py-10 px-6 md:pt-0 pt-10 md:pb-0 pb-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-slate-400">
                  Send me a message
                </h3>

                <form
                  name="contact-main"
                  method="post"
                  action="/ThankYou"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  class="mt-6 md:grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-stone-800"
                    >
                      First name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        onChange={handleChange}
                        autocomplete="given-name"
                        class="py-3 px-4 block w-full shadow-sm text-stone-800 focus:outline-none bg-gray-100 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-stone-800"
                    >
                      Last name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        onChange={handleChange}
                        autocomplete="family-name"
                        class="py-3 px-4 block w-full shadow-sm text-stone-800 focus:outline-none bg-gray-100 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-stone-800"
                    >
                      Email
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        onChange={handleChange}
                        class="py-3 px-4 block w-full shadow-sm text-stone-800 focus:outline-none bg-gray-100 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-stone-800"
                      >
                        Phone
                      </label>
                      <span id="phone-optional" class="text-sm text-stone-800">
                        Optional
                      </span>
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        onChange={handleChange}
                        autocomplete="tel"
                        class="py-3 px-4 block w-full shadow-sm text-stone-800 focus:outline-none bg-gray-100 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-stone-800"
                      >
                        Message
                      </label>
                      <span id="message-max" class="text-sm text-stone-800">
                        Max. 500 characters
                      </span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        required
                        onChange={handleChange}
                        rows="4"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-100 rounded-md"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-span-2">
                    {SubmitDisabled === true ? (
                      <button
                        type="submit"
                        class="bg-slate-400 relative mt-2 w-full inline-flex items-center justify-center px-6 py-4 rounded-full shadow-sm text-base font-medium text-white hover:opacity-70"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        class="bg-slate-400 relative mt-2 w-full inline-flex items-center justify-center px-6 py-4 rounded-full shadow-sm text-base font-medium text-white hover:opacity-70"
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
