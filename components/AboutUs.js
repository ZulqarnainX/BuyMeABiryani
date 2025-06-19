"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
          About Us
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          Welcome to <span className="text-yellow-400 font-semibold">BuyMeABiryani</span> — a
          Pakistani platform where creators, freelancers, and artists can
          receive love and tips from their audience using Easypaisa & JazzCash.
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
          Think of it like Patreon, but built for Pakistan 🇵🇰. Each user can
          make their own page and start accepting tips from supporters who
          appreciate their work — just real
          support, the local way.
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
          I'm <span className="text-blue-300 font-medium">Zulqarnain</span>, a 17-year-old dev
          who built this project as a passion project and to learn. I used{" "}
          <span className="text-green-400 font-medium">Next.js, React, Tailwind CSS</span>, and{" "}
          <span className="text-pink-400 font-medium">MongoDB</span> to bring it all together.
          Every line of code in this project added something to my growth.
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
          Sure, we can add payment gateways later and expand the platform. But
          for now, this is a functioning and real tribute to what can be built
          with passion and code 💻🔥
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/ZulqarnainX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg
              fill="white"
              role="img"
              viewBox="0 0 24 24"
              className="w-10 h-10 hover:text-blue-400 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .296C5.373.296 0 5.67 0 12.297c0 5.289 3.438 9.771 8.205 11.365.6.113.82-.261.82-.577 0-.285-.012-1.243-.017-2.25-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.933 0-1.311.469-2.382 1.236-3.221-.124-.304-.536-1.527.117-3.181 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.654.243 2.877.119 3.181.77.839 1.235 1.91 1.235 3.221 0 4.609-2.804 5.625-5.475 5.922.43.371.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.217.694.825.576C20.565 22.064 24 17.584 24 12.297 24 5.67 18.627.296 12 .296z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/zulqarnainx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg
              fill="white"
              role="img"
              viewBox="0 0 24 24"
              className="w-10 h-10 hover:text-blue-500 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452H17.21v-5.569c0-1.328-.026-3.037-1.851-3.037-1.851 0-2.134 1.444-2.134 2.938v5.668H9.001V9h3.104v1.561h.045c.434-.823 1.498-1.689 3.086-1.689 3.3 0 3.909 2.171 3.909 4.994v6.586zM5.337 7.433a1.794 1.794 0 1 1 .002-3.588 1.794 1.794 0 0 1-.002 3.588zm1.67 13.019H3.668V9h3.339v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .775 23.2 0 22.222 0z" />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Sometimes, one biryani can mean the world 🍛💙
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
