import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import About from "../components/About/About.js";
import Footer from "../components/Footer/Footer.js";

const IndexPage = () => {
  return (
    <main class="bg-gray-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <About />

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

export default IndexPage;
