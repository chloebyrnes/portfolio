import * as React from "react";

const About = () => {
  return (
    <div class="py-10 bg-white">
      <div class="max-w-xl mx-auto lg:max-w-7xl lg:px-8">
        <div class="container mx-auto flex justify-center bg-white">
          <h1 class="text-4xl text-center font-semibold text-sky-900">
            About Me
          </h1>
        </div>
        <div class="container mx-auto flex justify-center bg-white">
          <h1 class="text-center text-sky-900 px-20 pt-10">
            Hello! I'm currently enrolled in UCF's Full Stack Developer program.
            I'm studying to be a developer. I created this portfolio for my
            assignment. When you click "Menu" in the navigation bar, you are
            able to see my portfolio. You can see the websites/applications I've
            created throughout my classes. Feel free to contact me using the
            contact form.
          </h1>
        </div>
        <div class="container mx-auto flex justify-center bg-white">
          <h1 class="text-center text-sky-900 px-20 pt-5">
            Thanks for visiting!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
