/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  BackgroundLines,
  Badge,
  BentoGrid,
  BentoGridItem,
  CanvasRevealEffect,
  Card,
  CardBody,
  CardContainer,
  CardItem,
  FlipWords,
  FloatingDock,
  LampContainer,
  MacbookScroll,
  Skeleton,
  SparklesCore,
  Spotlight,
} from "@/components";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";

import Image from "next/image";
import { CardLayout, TechStack } from "@/const";
import {
  Icon360,
  Icon3dRotate,
  IconAB,
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconBrandAdobeXd,
  IconBrandFigma,
  IconBrandFlutter,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandReact,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconEyeCode,
} from "@tabler/icons-react";
import Link from "next/link";
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
        <div className=" p-5 max-w-7xl  mx-auto relative w-full pt-0 md:pt-20">
          <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-7xl font-light text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
              Hello, everyone
            </h1>
            <h1 className="md:text-7xl mt-2 text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
              it's me alul.
            </h1>
            <div className="w-[40rem] h-40 md:-mt-[90px] -mt-[50px] relative">
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
      <div className="flex flex-col md:flex-row bg-black dark:bg-black ">
        <div className="w-full md:w-1/2 h-full md:h-[40rem]">
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
                  src={"/images/me.jpg"}
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
        <div className="w-full md:w-1/2 h-full md:h-[40rem] px-5 md:px-0">
          <div className="h-[40rem] flex flex-col text-left justify-start my-20 items-start px-4 space-y-4">
            <div className="text-5xl md:text-6xl mr-auto font-normal text-neutral-600 dark:text-neutral-400">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
                let’s Introduce
              </span>{" "}
              <br /> about
              <FlipWords words={words} /> <br />
            </div>

            <p className="tracking-wides text-md lg:!text-md mb-5">
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
      <div className="h-[40rem]">
        <div className="text-5xl text-center md:text-4xl mr-auto font-normal text-neutral-600 dark:text-neutral-400">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
            Cross-Platform Developer
          </span>
        </div>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
          <Card
            title="Mobile Developer"
            icon={<IconDeviceMobile className="h-20 w-20 md:h-40 md:w-40" />}
            iconStack={[
              <IconBrandReact key="react" />,
              <IconBrandFlutter key="figma" />,
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card
            title="Web Developer"
            icon={<IconDeviceLaptop className="h-20 w-20 md:h-40 md:w-40" />}
            iconStack={[
              <IconBrandNextjs key="react" />,
              <IconBrandReact key="react" />,
              <IconBrandLaravel key="figma" />,
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card
            title="UI/UX Designer"
            icon={<IconBrandFigma className="h-20 w-20 md:h-40 md:w-40" />}
            iconStack={[
              <IconBrandFigma key="figma" />,
              <IconBrandAdobePhotoshop key="react" />,
              <IconBrandAdobeXd key="react" />,
              <IconBrandAdobeIllustrator key="react" />,
            ]}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </div>

      <div className="-mt-0 md:-mt-[200px] overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={
            <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              My Big Project <br />{" "}
              <span className="font-light text-[20px]">
                Cash Management Platform from BRI
              </span>
            </span>
          }
          badge={
            <Link href="https://peerlist.io/manuarora">
              <Badge className="h-10 w-10 transform -rotate-12" />
            </Link>
          }
          src={`/images/display.png`}
          showGradient={false}
        />
      </div>

      <BentoGrid className="max-w-4xl my-20 mx-10 md:mx-auto">
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
