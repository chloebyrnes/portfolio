import * as React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const Resume = () => {
  return (
    <main class="bg-gray-100">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

      <header class="py-4">
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

      <div class="container mx-auto flex justify-center bg-white pt-20 pb-10">
        <h1 class="text-4xl text-center font-semibold text-sky-900">Resume</h1>
      </div>
      <div class="container mx-auto flex justify-center bg-white px-40 pb-20 text-sky-900">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc,
        </p>
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
