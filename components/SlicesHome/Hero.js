import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
const Hero = ({ slice }) => {
  // console.log(slice);
  const heroContent = slice?.primary;
  const ctaBtns = slice?.items;
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href={heroContent.logo_href}>
                <Image
                  className="h-8 w-auto sm:h-10"
                  loader={myLoader}
                  src={heroContent.logo_src}
                  alt={heroContent.logo_alt}
                  width={200}
                  height={50}
                  unoptimized
                />
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        ></Transition>
      </Popover>

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                {heroContent.headline_part1}
              </span>{" "}
              <span className="block text-indigo-600 xl:inline">
                {heroContent.headline_part2}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {heroContent.subhead}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                {ctaBtns[0].content && (
                  <a
                    href={ctaBtns[0].url}
                    target={ctaBtns[0].target}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {ctaBtns[0].content}
                  </a>
                )}{" "}
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                {ctaBtns[1]?.content && (
                  <a
                    href={ctaBtns[1]?.url}
                    target={ctaBtns[1]?.target}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {ctaBtns[1]?.content}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            loader={myLoader}
            src={heroContent.back_img}
            alt={heroContent.back_alt}
            width="100%"
            height="100%"
            unoptimized
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
