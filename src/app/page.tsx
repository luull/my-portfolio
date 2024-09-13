/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  BackgroundLines,
  BentoGrid,
  BentoGridItem,
  CardBody,
  CardContainer,
  CardItem,
  FlipWords,
  FloatingDock,
  LampContainer,
  Skeleton,
  SparklesCore,
  Spotlight,
} from "@/components";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";

import Image from "next/image";
import { CardLayout, TechStack } from "@/const";
export default function Home() {
  const words = ["me", "luull", "alul"];
  return (
    <div className="relative w-full">
      <Navbar />
      <div className="h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-30"
          fill="blue"
        />
        <Spotlight
          className="-top-40 right-0 md:left-10 md:-top-0"
          fill="green"
        />
        <Spotlight
          className="-top-40 right-0 md:right-10 md:-top-20"
          fill="cyan"
        />
        <div className=" p-5 max-w-7xl  mx-auto relative w-full pt-20 md:pt-20">
          <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-7xl font-light text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
              Hello, everyone
            </h1>
            <h1 className="md:text-7xl mt-2 text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
              it's me alul.
            </h1>
            <div className="w-[40rem] h-40 -mt-[90px] relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.8}
                maxSize={1}
                particleDensity={2000}
                className="w-full pt-5 h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 h-[40rem]">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Front End Developer
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm tracking-wides max-w-sm mt-2 dark:text-neutral-300"
              >
                "the <b>EARTH</b> without <b>ART</b> is just <b>EH</b>"
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={"./images/me.jpg"}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="foto"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Hire now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Contact me
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div className="w-1/2 h-[40rem]">
          <div className="h-[40rem] flex flex-col text-left justify-start my-20 items-start px-4 space-y-4">
            <div className="text-6xl mr-auto font-normal text-neutral-600 dark:text-neutral-400">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
                let’s Introduce
              </span>{" "}
              <br /> about
              <FlipWords words={words} /> <br />
            </div>

            <p className="tracking-wides mb-5">
              Hello, I'm Muhammad Fadlullah Assalafy Yulandara, known as Luull.
              I am a third-semester student with a vocational background in
              software engineering, specializing in web and mobile development.
              With over 5 years of experience in the field, I have successfully
              designed and developed 8 systems aimed at boosting work
              efficiency. I have strong expertise in Front-End development using
              JavaScript, along with modern technologies such as React, Next.js,
              Tailwind CSS, and TypeScript. On the backend, I am proficient in
              using Laravel and Golang to build robust and scalable
              applications. I'm passionate about learning and growth, and I’m
              currently seeking opportunities to join a dynamic tech startup
              where I can continue to hone my skills and contribute to
              innovative projects.
            </p>
            <div className="mt-5">
              <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={TechStack}
              />
            </div>
          </div>
        </div>
      </div>

      <BentoGrid className="max-w-4xl my-20 mx-auto">
        {CardLayout.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
