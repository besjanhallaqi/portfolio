import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";
import { FaReact, FaWordpressSimple, FaPhp, FaBootstrap } from "react-icons/fa";
import {
  SiMysql,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiThreedotjs,
  SiTypescript,
  SiMui,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function AboutMe() {
  const skills = [
    {
      title: "ReactJS",
      link: "https://reactjs.org/",
      svg: <FaReact className="text-[#444] text-[32px]" />,
    },
    {
      title: "TypeScript",
      link: "https://www.typescriptlang.org/",
      svg: <SiTypescript className="text-[#444] text-[32px]" />,
    },
    {
      title: "NextJS",
      link: "https://nextjs.org/",
      svg: <TbBrandNextjs className="text-[#444] text-[32px]" />,
    },
    {
      title: "ThreeJS",
      link: "https://threejs.org/",
      svg: <SiThreedotjs className="text-[#444] text-[32px]" />,
    },
    {
      title: "JavaScript",
      link: "https://www.javascript.com/",
      svg: <SiJavascript className="text-[#444] text-[32px]" />,
    },
    {
      title: "TailwindCSS",
      link: "https://tailwindcss.com/",
      svg: <SiTailwindcss className="text-[#444] text-[32px]" />,
    },
    {
      title: "Material UI",
      link: "https://mui.com/",
      svg: <SiMui className="text-[#444] text-[32px]" />,
    },
    {
      title: "WordPress",
      link: "https://wordpress.com/",
      svg: <FaWordpressSimple className="text-[#444] text-[32px]" />,
    },
    {
      title: "HTML",
      link: "",
      svg: <SiHtml5 className="text-[#444] text-[32px]" />,
    },
    {
      title: "CSS",
      link: "",
      svg: <SiCss3 className="text-[#444] text-[32px]" />,
    },
    {
      title: "PHP",
      link: "https://www.php.net/",
      svg: <FaPhp className="text-[#444] text-[32px]" />,
    },
    {
      title: "MySQL",
      link: "https://www.mysql.com/",
      svg: <SiMysql className="text-[#444] text-[32px]" />,
    },
    {
      title: "Bootstrap",
      link: "https://getbootstrap.com/",
      svg: <FaBootstrap className="text-[#444] text-[32px]" />,
    },
  ];
  return (
    <DefaultLayout>
      <div className="w-10/12 lg:w-full h-full flex flex-col gap-20 py-20 container mx-auto">
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-[36px] font-bold text-[#444] uppercase">
            Experience
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-12 lg:gap-x-32">
            <div className="w-full flex flex-col text-[#444]">
              <Link
                href="https://www.axians-kosovo.com/"
                target="_blank"
                className="font-semibold text-[26px] hover:underline"
              >
                Axians Kosovo
              </Link>
              <p className="font-semibold">
                <span className="font-regular text-[13px]">From: </span>02/2023{" "}
                <span className="font-regular text-[13px]">To: </span>Current
              </p>
              <ul className="list-disc list-inside pl-2 mt-2">
                <li>
                  Working with ReactJS, TypeScript and Material UI for better
                  user experience
                </li>
                <li>Creating and testing applications</li>
                <li>Collaboration with team</li>
                <li>Working with Scrum</li>
                <li>Managing successful sprints</li>
                <li>
                  Finding solutions for a different variations of website
                  problems
                </li>
                <li>Maintaining and updating websites</li>
              </ul>
            </div>
            <div className="w-full flex flex-col text-[#444]">
              <Link
                href="https://sponex.ch/"
                target="_blank"
                className="font-semibold text-[26px] hover:underline"
              >
                Sponex L.L.C.
              </Link>
              <p className="font-semibold">
                <span className="font-regular text-[13px]">From: </span>10/2021{" "}
                <span className="font-regular text-[13px]">To: </span>12/2022
              </p>
              <ul className="list-disc list-inside pl-2 mt-2">
                <li>
                  Proficient in HTML, CSS, TailwindCSS, ReactJS, NextJS,
                  TypeScript, and other relevant web design coding languages
                </li>
                <li>Creating and testing applications for websites</li>
                <li>Collaboration with team</li>
                <li>Working with graphics and other designers</li>
                <li>
                  Finding solutions for a different variations of website
                  problems
                </li>
                <li>Maintaining and updating websites</li>
                <li>Staying up-to-date on technology</li>
              </ul>
            </div>
            <div className="w-full flex flex-col text-[#444]">
              <Link
                href="https://www.procreditbank-kos.com/"
                target="_blank"
                className="font-semibold text-[26px] hover:underline"
              >
                ProCredit Bank
              </Link>
              <p className="font-semibold">
                <span className="font-regular text-[13px]">From: </span>07/2020{" "}
                <span className="font-regular text-[13px]">To: </span>10/2020
              </p>
              <ul className="list-disc list-inside pl-2 mt-2">
                <li>Finished Internship for this department in bank</li>
                <li>
                  Created reports from database to the all departments in the
                  bank
                </li>
                <li>Used queries in MSSQL for generating reports</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-[36px] font-bold text-[#444] uppercase">
            Education
          </h2>
          <div className="w-full flex flex-col text-[#444]">
            <Link
              href="https://www.ubt-uni.net/sq/ballina/"
              target="_blank"
              className="font-semibold text-[26px] hover:underline"
            >
              University of Business and Technology
            </Link>
            <p className="font-semibold">
              <span className="font-regular text-[13px]">From: </span>09/2017{" "}
              <span className="font-regular text-[13px]">To: </span>08/2023
            </p>
            <p className="font-semibold text-[18px]">
              Bachelor for Computer Science and Engineering
            </p>
            <p>
              <span className="font-semibold text-[13px]">Address:</span> Lagjia
              Kalabria, Prishtine, Kosovo
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-[36px] font-bold text-[#444] uppercase">
            Skills
          </h2>
          <div className="w-full flex flex-wrap justify-center gap-4">
            {skills.map((item, index) => (
              <div
                key={index}
                className="border-2 border-[#444] text-[#444] font-semibold flex flex-col rounded-xl"
              >
                <Link
                  href={item.link}
                  target={item.link === "" ? "" : "_blank"}
                  className="p-6 flex flex-col items-center gap-2 hover:underline"
                >
                  {item.svg}
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
