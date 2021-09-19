import React from "react";
import ShirtModel from "./ShirtModel"
import AnimatedObject from "./AnimatedObject";

function index() {

  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4  text-white font-bold">From the past, for the future.
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 text-lg leading-relaxed">Our Retrowave styled shirt designs from thousands of creators around the world are sure to keep your body and brain happy. Pick over 500 designs to anything of your likening. </p>
          <div class="flex justify-center">
            <AnimatedObject>
              <button class="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">Sign Up!</button>
            </AnimatedObject>
            <AnimatedObject>

              <button class="ml-4 inline-flex text-gray-400 bg-gray-9 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">More Info</button>
            </AnimatedObject>
          </div>
        </div>
        <div className="lg:max-w-lg md:w-1/2 w-5/6 shirt-container h-full">
          <AnimatedObject>

            <a href="/product">
              <ShirtModel />
            </a>
          </AnimatedObject>

        </div>
      </div>
    </section>
  );
}

export default index;
