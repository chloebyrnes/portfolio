import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <main class="bg-gray-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="container mx-auto flex justify-center bg-white pt-20 pb-10">
        <h1 class="text-4xl text-center font-semibold text-sky-900">
          Thank You!
        </h1>
      </div>
      <div class="container mx-auto flex justify-center bg-white px-40 text-sky-900">
        <p>Your message has been sent. </p>
      </div>
      <div class="container mx-auto flex justify-center bg-white pb-20 text-sky-900">
        <p>I will get back to you soon.</p>
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
