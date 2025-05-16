import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import a12 from "../images/12.png";
import a13 from "../images/13.png";
import Contact from './contact';
import Reviews from "./review";
import cs from "../images/project2.png";
import cft from "../images/cft1.png";

function Middle() {
  const [typewriterLoaded, setTypewriterLoaded] = useState(false);

  useEffect(() => {
    import("typewriter-effect")
      .then(() => {
        setTypewriterLoaded(true);
      })
      .catch((error) => {
        console.error("Error importing Typewriter:", error);
      });
  }, []);

  return (
    <div className="text-gray-600 body-font">
      {/* Hero Section */}
      <section id="home" className="py-24 px-5 md:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="lg:w-1/2 md:pr-16 flex flex-col text-center md:text-left mb-10 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Converting coffee ☕ into code 💻 using
              <br className="hidden lg:inline-block" />
              {typewriterLoaded && typeof window !== "undefined" && (
                <Typewriter
                  options={{
                    strings: [
                      "React & Nextjs </>",
                      "Python 🐍",
                      "Cloud Native Generative AI",
                      "Microservices",
                      "Fast API ⚛️",
                      "& Many more",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              )}
            </h1>
            <p className="mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              Meet Ihtesham, CEO & Founder at Alpha Networks — turning ideas into powerful digital experiences.
              From coding enthusiast to tech innovator, my journey is fueled by curiosity and creativity.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="/resume.pdf" className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Resume
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 w-full md:w-1/2">
            <Image
              alt="Profile"
              src="/download.jpeg"
              width={400}
              height={700}
              className="object-cover object-center rounded"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 mb-4 md:mb-0">
              Projects 📋
            </h1>
            <p className="lg:w-2/3 mx-auto md:ml-6 leading-relaxed text-base">
              Celebrating a variety of projects, my portfolio exemplifies adaptability and skill in software development. From e-commerce platforms to data visualization tools and personal websites, each project showcases my proficiency in leveraging cutting-edge technologies to deliver impactful solutions.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="md:w-1/2 w-full p-2">
              <div className="grid grid-cols-2 gap-2">
                <a href="https://github.com/ihtesham-jahangir/WeatherForecast-custom-gpt ">
                  <Image
                    alt="project"
                    src="https://github.com/user-attachments/assets/7ba9a759-8555-4477-95f5-2618db51835a "
                    width={500}
                    height={300}
                    className="w-full h-full object-cover object-center block rounded"
                  />
                </a>
                <a href="https://ekhedmah.com/ ">
                  <Image
                    alt="project"
                    src={cs}
                    width={501}
                    height={301}
                    className="w-full h-full object-cover object-center block rounded"
                  />
                </a>
                <a href="https://github.com/ihtesham-jahangir/ai-vision-streamlit-app " className="col-span-2">
                  <Image
                    alt="project"
                    src={a12}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center block rounded"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full p-2">
              <div className="grid grid-cols-2 gap-2">
                <a href="#">
                  <Image
                    alt="project"
                    src={a13}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center block rounded"
                  />
                </a>
                <Image
                  alt="project"
                  src="https://dummyimage.com/502x302 "
                  width={502}
                  height={302}
                  className="w-full h-full object-cover object-center block rounded"
                />
                <Image
                  alt="project"
                  src="https://dummyimage.com/503x303 "
                  width={503}
                  height={303}
                  className="w-full h-full object-cover object-center block rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Achievements 🏆
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              In the grand tapestry of human history, achievements stand as luminous markers of progress, beckoning us toward a future ablaze with innovation, discovery, and excellence.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <Image
                  alt="achievement"
                  src={cft}
                  width={600}
                  height={360}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">IT Specialist</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Issued by Credly from Pearson</h1>
                  <p className="leading-relaxed">
                    Expert in Artificial Intelligence with a strong background in developing innovative solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <Image
                  alt="achievement"
                  src="https://dummyimage.com/601x361 "
                  width={601}
                  height={361}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="relative">
                <Image
                  alt="achievement"
                  src="https://dummyimage.com/603x363 "
                  width={603}
                  height={363}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from CEO / About Section */}
      <section id="about" className="py-24 px-5 md:px-0">
        <div className="container mx-auto">
          <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <h1 className="text-black font-bold text-2xl mb-4">Message From CEO</h1>
            <p className="leading-relaxed text-lg">
              Welcome to Alpha Networks! Our mission is simple: to transform the landscape of technology through groundbreaking solutions that empower businesses and individuals alike.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">CEO & Founder</h2>
            <p className="text-gray-500">Alpha Network</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-5 md:px-0">
        <Contact />
      </section>
    </div>
  );
}

export default Middle;