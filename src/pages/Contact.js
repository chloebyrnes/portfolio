import React, { useState } from "react";
import Header from "../components/Header/Header.js";
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
    <div class="bg-sky-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <header class="py-4">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center px-6 md:px-0">
            <div class="">
              <h1 class="text-4xl font-semibold">Chloe Byrnes</h1>
            </div>
            <div class="text-black">
              {" "}
              <button
                type="button"
                class="ml-5 inline-flex items-center justify-center rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <Header />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="">
        <div class="max-w-7xl mx-auto md:py-16 md:px-4">
          <div class="rounded-3xl relative bg-white shadow-xl">
            <h2 class="sr-only">Contact me</h2>

            <div class="rounded-3xl bg-gradient-to-r from-sky-500 to-sky-300 grid grid-cols-1 lg:grid-cols-3">
              <div class="relative overflow-hidden py-10 px-6 xl:p-12">
                <h3 class="pt-14 text-5xl font-medium text-white">
                  Contact Information
                </h3>

                <dl class="mt-16 space-y-6">
                  <a
                    href="tel:727-612-6781"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-indigo-50 hover:border-gray-600"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-300"
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
                    <span class="ml-3">(727) 612-6781</span>
                  </a>

                  <a
                    href="mailto:chloebyrnesash@gmail.com"
                    class="rounded-md border border-white p-5 flex justify-center text-base text-indigo-50 hover:border-gray-600"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-300"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-3">chloebyrnesash@gmail.com</span>
                  </a>
                </dl>
              </div>

              <div class="shadow-xl rounded-3xl bg-white md:mt-14 md:mr-14 m-8 md:mb-14 form md:py-10 px-6 md:pt-0 pt-10 md:pb-0 pb-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-gray-900">
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
                      class="block text-sm font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        autocomplete="given-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-200 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        autocomplete="family-name"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-200 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div class="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        onChange={handleChange}
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-200 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <label
                        for="phone"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Phone
                      </label>
                      <span id="phone-optional" class="text-sm text-gray-500">
                        Optional
                      </span>
                    </div>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        autocomplete="tel"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-200 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <div class="flex justify-between">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-900"
                      >
                        Message
                      </label>
                      <span id="message-max" class="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div class="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        rows="4"
                        class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:outline-none bg-gray-200 rounded-md"
                        aria-describedby="message-max"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-span-2">
                    {SubmitDisabled === true ? (
                      <button
                        type="submit"
                        class="bg-gradient-to-r from-sky-500 to-sky-300 relative mt-2 w-full inline-flex items-center justify-center px-6 py-4 rounded-full shadow-sm text-base font-medium text-white hover:opacity-70"
                      >
                        Loading...
                      </button>
                    ) : (
                      <button
                        class="bg-gradient-to-r from-sky-500 to-sky-300 relative mt-2 w-full inline-flex items-center justify-center px-6 py-4 rounded-full shadow-sm text-base font-medium text-white hover:opacity-70"
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
