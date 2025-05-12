// pages/index.js
"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import logo from "./images/logo.svg";
import Mainpage from "./components/main";
import styles from "@/app/components/css/styles.module.css";

// Dynamically import Typewriter to ensure it only loads on the client
const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const IndexPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMainPage(true);
    }, 1500); // 1500 milliseconds delay for demonstration
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        {!showMainPage && (
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={50}
            className="logo-animation"
          />
        )}
      </header>

      {!showMainPage && (
        <div className="text-3xl text-gray-800 font-bold">
          <Typewriter
            options={{
              strings: ["HELLO WORLD WELCOME TO MY PORTFOLIO"],
              autoStart: true,
              loop: false,
              delay: 10,
            }}
          />
        </div>
      )}

      {showMainPage && (
        <div className="animate-fade-in">
          <Mainpage />
        </div>
      )}
    </div>
  );
};

export default IndexPage;
