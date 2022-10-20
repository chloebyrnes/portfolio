import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import About from "../components/About/About.js";
import Footer from "../components/Footer/Footer.js";

const IndexPage = () => {
  return (
    <main class="bg-stone-200">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <HeaderBar />

      <div class="grid place-items-center">
        <About />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;
