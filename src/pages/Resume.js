import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <main class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
        <div class="container mx-auto flex justify-center bg-stone-200">
          <h1 class="text-4xl text-center font-semibold text-stone-800">
            Resume
          </h1>
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

export default Resume;
