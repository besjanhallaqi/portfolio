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

  const jobs = [
    {
      title: "Visiar HealthCare",
      website: "https://visiar.nl/",
      from: "03/2024",
      to: "Current",
      description: [
        "Working with ReactJS, NextJS, TypeScript and TailwindCSS for better user experience",
        "Creating scalable applications",
        "Collaboration with team",
        "Working with Scrum",
        "Managing successful sprints",
        "Finding solutions for a different variations of website problems",
      ],
    },
    {
      title: "Axians Kosovo",
      website: "https://www.axians-kosovo.com/",
      from: "02/2023",
      to: "03/2024",
      description: [
        "Working with ReactJS, TypeScript and Material UI for better user experience",
        "Creating and testing applications",
        "Collaboration with team",
        "Working with Scrum",
        "Managing successful sprints",
        "Finding solutions for a different variations of website problems",
        "Maintaining and updating websites",
      ],
    },
    {
      title: "Sponex L.L.C.",
      website: "https://sponex.ch/",
      from: "10/2021",
      to: "12/2022",
      description: [
        "Proficient in HTML, CSS, TailwindCSS, ReactJS, NextJS, TypeScript, and other relevant web design coding languages",
        "Creating and testing applications for websites",
        "Collaboration with team",
        "Working with graphics and other designers",
        "Finding solutions for a different variations of website problems",
        "Maintaining and updating websites",
        "Staying up-to-date on technology",
      ],
    },
    {
      title: "ProCredit Bank",
      website: "https://www.procreditbank-kos.com/",
      from: "07/2020",
      to: "10/2020",
      description: [
        "Finished Internship for this department in bank",
        "Created reports from database to the all departments in the bank",
        "Used queries in MSSQL for generating reports",
      ],
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
            {jobs.map((item) => (
              <div
                key={item.title}
                className="w-full flex flex-col text-[#444]"
              >
                <Link
                  href={item.website}
                  target="_blank"
                  className="font-semibold text-[26px] hover:underline"
                >
                  {item.title}
                </Link>
                <p className="font-semibold">
                  <span className="font-regular text-[13px]">From: </span>
                  {item.from}{" "}
                  <span className="font-regular text-[13px]">To: </span>
                  {item.to}
                </p>
                <ul className="list-disc list-inside pl-2 mt-2">
                  {item.description.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
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
              Bachelor on Computer Science and Engineering
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
