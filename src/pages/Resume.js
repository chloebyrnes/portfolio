import * as React from "react";
import HeaderBar from "../components/Header/HeaderBar.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <main class="bg-stone-200">
      <HeaderBar />

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
