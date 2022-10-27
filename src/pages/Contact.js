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
    <div class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
