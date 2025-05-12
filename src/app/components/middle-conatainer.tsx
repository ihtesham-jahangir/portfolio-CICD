import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import a12 from "../images/12.png"; // Adjusted path
import a13 from "../images/13.png"; // Adjusted path
import Contact from './contact'; // Adjusted path
import about from "../images/about.jpg"
import Reviews from "./review";
import cs from "../images/project2.png"
import cft from "../images/cft1.png"
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
    <div>
      <section className="text-gray-600 body-font" id="home">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <br/><br/><br/><br/><br/>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {`Converting coffee ☕︎ into code 👨🏾‍💻 using `}
              <br className="hidden lg:inline-block" />
              {typewriterLoaded && typeof window !== "undefined" && (
                <Typewriter
                  options={{
                    strings: [
                      "React & Nextjs </> ",
                      "Python 🐍",
                      "Cloud Native Generative AI",
                      "Microservices",
                      "Fast API ⚛️ ",
                      "& Many more ",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              )}
            </h1>

            <p className="mb-8 leading-relaxed">
              {` ╰⪼ Meet Ihtesham CEO & Founder at Alpha Networks, the digital architect crafting tomorrow's world with code. 
            From coding enthusiast to master innovator, 
            my journey is fueled by curiosity and creativity. 
            With groundbreaking projects and a vision for a transformative future, 
            my skill sets the standard for aspiring programmers everywhere.`}
            </p>
            <div className="flex justify-center">
              <a href="/resume.pdf" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Resume
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt=""
              src="https://drive.google.com/uc?id=1wRG9QySUfO9a_yhcvN6hcWf0RjTB_VsO"
              height={700}
              width={400}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id="projects">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Projects 📋
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              {`Celebrating a variety of projects, my portfolio exemplifies 
my adaptability and skill in software development. From e-commerce platforms to data 
visualization tools and personal websites, each project showcases my proficiency in 
leveraging cutting-edge technologies to deliver impactful solutions.
 My portfolio reflects my passion for innovation and commitment to excellence in every endeavor.`}
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
              <a href="https://github.com/ihtesham-jahangir/WeatherForecast-custom-gpt"> 
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://github.com/user-attachments/assets/7ba9a759-8555-4477-95f5-2618db51835a"
                  width={500}
                  height={300}
                />
                </a>
              </div>
              <div className="md:p-2 p-1 w-1/2">
              <a href="https://ekhedmah.com/">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={cs}
                  width={501}
                  height={301}
                />
                </a>
              </div>
              <div className="md:p-2 p-1 w-full">
                <a href="https://github.com/ihtesham-jahangir/ai-vision-streamlit-app"> 
                  <Image
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={a12}
                    width={400}
                    height={300}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <a href="">
                  <Image
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={a13}
                    width={400}
                    height={300}
                  />
                </a>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                  width={502}
                  height={302}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                  width={503}
                  height={303}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="achievements">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Achievements 🏆
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {`In the grand tapestry of human history, achievements stand as luminous markers of progress, 
      beckoning us toward a future ablaze with innovation, discovery, and excellence. 
      As we revel in the strides made in Computer Science, 
      let's not just admire past triumphs but eagerly embrace the challenges ahead. 
      With unwavering determination, resilience, and boundless ingenuity, 
      we propel ourselves toward new horizons, sculpting a radiant tomorrow for generations yet to unfold.`}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={cft}
                  width={600}
                  height={360}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    IT Specialist
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Issued by Credly from Pearson
                  </h1>
                  <p className="leading-relaxed">
                  Expert in Artificial Intelligence with a strong background in developing innovative solutions and leveraging cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                  width={601}
                  height={361}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/603x363"
                  width={603}
                  height={363}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/602x362"
                  width={602}
                  height={362}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Neptune
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/605x365"
                  width={605}
                  height={365}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Holden Caulfield
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/606x366"
                  width={606}
                  height={366}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Alper Kamu
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <>
        <section className="text-gray-600 body-font relative felx justify-center items-center pd-100" id="contact">
          <Contact />
        </section>
        <section className="text-gray-600 body-font relative felx justify-center items-center pd-100" id="review">
          <Reviews />
        </section>
        <section className="text-gray-600 body-font" id="about">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
              <p className="leading-relaxed text-lg">
                <h1 className="text-black font-bold">Message From CEO </h1>
                {`🚀 Welcome to Alpha Networks! 🚀
                Dear Valued Partners and Customers,
                I am thrilled to extend a warm welcome to you as
                the CEO of Alpha Networks. At Alpha Networks, we are dedicated
                to pioneering innovation and excellence in the tech industry.
                Our mission is simple: to transform the landscape of
                technology through groundbreaking solutions that empower
                businesses and individuals alike. With a relentless commitment
                to innovation and a passion for pushing boundaries, we strive
                to redefine what's possible in the digital age. At Alpha
                Networks, we believe that success is built on strong
                relationships and a shared vision for the future. We are
                committed to fostering partnerships that drive mutual growth
                and success, while always keeping our customers at the
                forefront of everything we do. As we embark on this exciting
                journey together, I invite you to join us in shaping the
                future of technology. Together, we will unlock new
                opportunities, overcome challenges, and achieve remarkable
                feats that leave a lasting impact on the world. Thank you for
                choosing Alpha Networks. Let's innovate, inspire, and lead
                together. Warm regards,`}
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                CEO & Founder
              </h2>
              <p className="text-gray-500">Alpha Network</p>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Middle;
