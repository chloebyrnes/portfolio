import * as React from "react";
import AboutMe from "../../images/aboutme.jpg";

const About = () => {
  return (
    <main class="bg-stone-200">
      <div class="bg-novisBlue">
        <div class="md:py-5 xl:py-32 pb-10 md:p-0 p-5">
          <div class="max-w-max lg:max-w-7xl mx-auto">
            <div class="relative">
              <div class="relative">
                <div class="lg:grid lg:grid-cols-2 lg:gap-12">
                  <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0 px-8 md:px-0">
                    <img class="rounded-3xl" src={AboutMe} alt="" />

                    <div class=" border-b pb-8 md:py-2 py-10  max-w-xl">
                      <h1 class="md:text-3xl text-2xl font-medium text-gray-500 tracking-tight md:space-y-2 pt-0 md:pt-8 pb-5">
                        <span class="block">Full Stack Developer</span>
                      </h1>
                      <p class="max-w-lg mt-2 text-stone-500 leading-relaxed pt-0 md:pt-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus.
                      </p>
                    </div>
                  </div>

                  <div class="mt-8 py-10 md:py-0">
                    <h1 class="px-12 md:px-0 md:text-4xl text-2xl font-medium text-gray-500 tracking-tight md:space-y-2 pl-10 md:pl-0">
                      <span class="block">About me</span>
                    </h1>
                    <p class=" px-12 md:px-0 md:text-xl text-lg md:max-w-lg mt-5 text-stone-500 md:leading-relaxed pl-10 md:pl-0">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
                      a, venenatis vitae, justo. Nullam dictum felis eu pede
                      mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                      elementum semper nisi. Aenean vulputate eleifend tellus.
                      Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                      ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                      feugiat a, tellus. Phasellus viverra nulla ut metus varius
                      laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
                      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam
                      eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                      condimentum rhoncus, sem quam semper libero, sit amet
                      adipiscing sem neque sed ipsum. Nam quam nunc, blandit
                      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec
                      odio et ante tincidunt tempus. Donec vitae sapien ut
                      libero venenatis faucibus. Nullam quis ante. Etiam sit
                      amet orci eget eros faucibus tincidunt. Duis leo. Sed
                      fringilla mauris sit amet nibh. Donec sodales sagittis
                      magna. Sed consequat, leo eget bibendum sodales, augue
                      velit cursus nunc, Donec pede justo, fringilla vel,
                      aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
                      ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                      felis eu pede mollis pretium. Integer tincidunt. Cras
                      dapibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="fixed
             inset-x-0
             bottom-0"
      ></div>
    </main>
  );
};

export default About;
