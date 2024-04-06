import React from "react";

export default function page() {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50  md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br className="block sm:hidden" />
                Pheakdey
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-AscendColor dark:text-gray-300 md:mt-8">
              I Am CSTAD Student Current This is My Mini-Project About
              E-Commercre With Next-Js
            </p>

            <p className="mt-4 text-xl text-AscendColor dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="relative font-bold text-primaryColor">
                  {" "}
                  Have a question?{" "}
                </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="#"
                title=""
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                Telegram
              </a>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 3xl:origin-bottom 3xl:scale-110"
              src="/my-profile-remove.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
