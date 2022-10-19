import * as React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <main class="bg-sky-100">
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

      <div class="container mx-auto flex justify-center bg-white pt-20 pb-10">
        <h1 class="text-xl text-center font-semibold">Thank You!</h1>
      </div>
      <div class="container mx-auto flex justify-center bg-white px-40">
        <p>Your message has been sent. </p>
      </div>
      <div class="container mx-auto flex justify-center bg-white pb-20">
        <p>I will get back to you soon.</p>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Resume;
