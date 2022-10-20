import * as React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const Resumetest = () => {
  return (
    <main class="bg-gray-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <header class="py-4 bg-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center px-6 md:px-0">
            <div class="">
              <h1 class="text-4xl font-semibold text-sky-900">Chloe Byrnes</h1>
            </div>
            <div class="text-sky-900">
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

      <div class="py-10 bg-white">
        <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
          <div class="container mx-auto flex justify-center bg-white">
            <h1 class="text-4xl text-center font-semibold text-sky-900">
              Resume
            </h1>
          </div>
        </div>
      </div>

      <div
        class="fixed
             inset-x-0
             bottom-0"
      >
        <Footer />
      </div>
    </main>
  );
};

export default Resumetest;
