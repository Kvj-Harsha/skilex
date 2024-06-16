import React from 'react';

function Hero() 
{
  return (
      <div>

          <section className="bg-gray-900 ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-l text-center">
            <h1 className="text-3xl text-[#D8D8F6] font-extrabold sm:text-5xl">
              Skilex
              <br/>  
              <strong className="font-bold text-[#B18FCF]"> Empowering Your Digital Journey. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-[#D8D8F6]">
            "Discover Local Talent: Get the Nearest Freelancers Based on Your Location!"
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-[#D8D8F6] px-12 py-3 text-sm font-medium text-black shadow hover:bg-[#B18FCF] focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-[#D8D8F6] shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
          </section>

          <section className="bg-gray-900 text-[#B18FCF]">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl text-[#B18FCF] font-bold sm:text-4xl">Select any from the below!</h2>

              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="/welcome/webdev"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">Web Development</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="welcome/appdev"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">App Developement</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="welcome/gra-des"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">Graphic Designing</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="welcome/content-writing"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">Content writing</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="welcome/vid-edit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">Video Editing</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>

                <a
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  href="welcome/dig-mar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-bold text-white">Digital Marketing</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                    distinctio alias voluptatum blanditiis laudantium.
                  </p>
                </a>
              </div>

              <div className="mt-12 text-center">
                <a
                  href="#"
                  className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Explore now!
                </a>
              </div>
            </div>
              </section>
          <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl text-[#B18FCF] font-bold sm:text-4xl">Grow your audience</h2>

              <p className="mt-4 text-[#D8D8F6]/50">
              Expand your audience reach with expert strategies and personalized guidance. Whether through targeted marketing campaigns, engaging content creation, or innovative social media tactics, we help you attract and retain your ideal audience. Grow your community, foster meaningful connections, and achieve lasting success in your digital endeavors..
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-[#B18FCF] px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-[#B18FCF]/50  hover:text-[#B18FCF] focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
          </section>

    </div>
  );
}

export default Hero;