import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("webs");

  const portfolioItems = [
    {
      title: "Proview360",
      image: "/images/portfolio/proview-cover.jpg",
      style:
        "text-[#d01840] border-[#d01840] shadow-md shadow-[#d0184080] hover:bg-[#d01840] hover:text-white",
      label: "Live Demo",
      link: "https://proview360.ch/",
    },
    {
      title: "Dea",
      image: "/images/portfolio/dea-cover.jpg",
      style:
        "text-[#d8d8d8] border-[#d8d8d8] shadow-md shadow-[#d8d8d880] hover:bg-[#d8d8d8] hover:text-white",
      label: "Live Demo",
      link: "https://deastudio.de/",
    },
    {
      title: "Grobarchitekten",
      image: "/images/portfolio/grobarchitekten.jpg",
      style:
        "text-[#16171b] border-[#16171b] shadow-md shadow-[#16171b80] hover:bg-[#16171b] hover:text-white",
      label: "Live Demo",
      link: "https://grobarchitekten.ch/",
    },
    {
      title: "Creation Bois",
      image: "/images/portfolio/creationbois-cover.jpg",
      style:
        "text-[#584637] border-[#584637] shadow-md shadow-[#58463780] hover:bg-[#584637] hover:text-white",
      label: "Live Demo",
      link: "https://creationbois.ch/",
    },
    {
      title: "Infra3D by iNovitas",
      image: "/images/portfolio/inovitas.jpg",
      style:
        "text-[#054263] border-[#054263] shadow-md shadow-[#05426380] hover:bg-[#054263] hover:text-white",
      label: "Live Demo",
      link: "https://landing.infra3d.com/",
    },
    {
      title: "Fight4Cure",
      image: "/images/portfolio/f4c.jpg",
      style:
        "text-[#b34141] border-[#b34141] shadow-md shadow-[#b3414180] hover:bg-[#b34141] hover:text-white",
      label: "Live Demo",
      link: "https://fight4cure.vercel.app/",
    },
    {
      title: "Strofulla",
      image: "/images/portfolio/strofulla-cover.jpg",
      style:
        "text-[#878787] border-[#878787] shadow-md shadow-[#87878780] hover:bg-[#878787] hover:text-white",
      label: "Live Demo",
      link: "https://strofulla.com/",
    },
    {
      title: "Neuron",
      image: "/images/portfolio/neuron-cover.jpg",
      style:
        "text-[#c3cbd3] border-[#c3cbd3] shadow-md shadow-[#c3cbd380] hover:bg-[#c3cbd3] hover:text-white",
      label: "Private",
      link: "",
    },
    {
      title: "Zoomtrip",
      image: "/images/portfolio/zoomtrip-cover.jpg",
      style:
        "text-[#6fd8bc] border-[#6fd8bc] shadow-md shadow-[#6fd8bc80] hover:bg-[#6fd8bc] hover:text-white",
      label: "Live Demo",
      link: "https://zoomtrip.vercel.app/",
    },
    {
      title: "Collector App",
      image: "/images/portfolio/collector-app.jpg",
      style:
        "text-[#142a64] border-[#142a64] shadow-md shadow-[#142a6480] hover:bg-[#142a64] hover:text-white",
      label: "Private",
      link: "",
    },
  ];

  const wordpressItems = [
    {
      title: "Var SHPK",
      image: "/images/wordpress/var.jpg",
      style:
        "text-[#345971] border-[#345971] shadow-md shadow-[#34597180] hover:bg-[#345971] hover:text-white",
      label: "Live Demo",
      link: "https://www.var-shpk.com/",
    },
    {
      title: "Finestra Sàrl",
      image: "/images/wordpress/finestra.jpg",
      style:
        "text-[#75e0ea] border-[#75e0ea] shadow-md shadow-[#75e0ea80] hover:bg-[#75e0ea] hover:text-white",
      label: "Live Demo",
      link: "https://www.finestra-sarl.ch/",
    },
    {
      title: "Hébergement du Pod",
      image: "/images/wordpress/hdp.jpg",
      style:
        "text-[#2c1d29] border-[#2c1d29] shadow-md shadow-[#2c1d2980] hover:bg-[#2c1d29] hover:text-white",
      label: "Live Demo",
      link: "https://www.hebergement-du-pod.ch/",
    },
    {
      title: "Domiciliations",
      image: "/images/wordpress/domi.jpg",
      style:
        "text-[#102a6a] border-[#102a6a] shadow-md shadow-[#102a6a80] hover:bg-[#102a6a] hover:text-white",
      label: "Live Demo",
      link: "https://www.domiciliations.ch/",
    },
    {
      title: "Résidence des Tournesols",
      image: "/images/wordpress/residencedestournesols.jpg",
      style:
        "text-[#2c2c2c] border-[#2c2c2c] shadow-md shadow-[#2c2c2c80] hover:bg-[#2c2c2c] hover:text-white",
      label: "Live Demo",
      link: "https://residencedestournesols.ch/",
    },
    {
      title: "Les Terrasses de Valbirse",
      image: "/images/wordpress/valbirse.jpg",
      style:
        "text-[#91bd95] border-[#91bd95] shadow-md shadow-[#91bd9580] hover:bg-[#91bd95] hover:text-white",
      label: "Live Demo",
      link: "https://www.les-terrasses-de-valbirse.ch/",
    },
    {
      title: "Michel Wolf",
      image: "/images/wordpress/michelwolf.jpg",
      style:
        "text-[#74c5ae] border-[#74c5ae] shadow-md shadow-[#74c5ae80] hover:bg-[#74c5ae] hover:text-white",
      label: "Live Demo",
      link: "https://www.michelwolfsa.ch/",
    },
  ];

  const gamesItems = [
    {
      title: "4 in a row",
      image: "/images/games/4inrow.jpg",
      style:
        "text-[#aa9a8d] border-[#aa9a8d] shadow-md shadow-[#aa9a8d80] hover:bg-[#aa9a8d] hover:text-white",
      label: "Live Demo",
      link: "https://rrath-rrath.netlify.app/",
    },
    {
      title: "Wordle",
      image: "/images/games/wordle.jpg",
      style:
        "text-[#b8babc] border-[#b8babc] shadow-md shadow-[#b8babc80] hover:bg-[#b8babc] hover:text-white",
      label: "Live Demo",
      link: "https://luaj.live/",
    },
    {
      title: "Checkers",
      image: "/images/games/checkers.jpg",
      style:
        "text-[#ccc3c2] border-[#ccc3c2] shadow-md shadow-[#ccc3c2] hover:bg-[#ccc3c2] hover:text-white",
      label: "Live Demo",
      link: "https://checkers-king.netlify.app/",
    },
    {
      title: "Sudoku",
      image: "/images/games/sudoku.jpg",
      style:
        "text-[#bdbdbd] border-[#dee2e3] shadow-md shadow-[#dee2e3] hover:bg-[#0e0e0ee0] hover:text-white",
      label: "Live Demo",
      link: "https://sudoku-ai.netlify.app/",
    },
    {
      title: "Dart",
      image: "/images/games/dart.jpg",
      style:
        "text-[#010101] border-[#9a9a9a] shadow-md shadow-[#9a9a9a] hover:bg-[#1f1f1fe0] hover:text-white",
      label: "Live Demo",
      link: "https://dartstrike.netlify.app/",
    },
  ];

  return (
    <DefaultLayout footerStyle="mt-auto">
      <div className="w-10/12 lg:w-full h-full container mx-auto flex flex-row overflow-x-auto gap-2 lg:gap-6 pt-20 pb-2 mb-6 lg:mb-12">
        <button
          type="button"
          onClick={() => setActiveTab("webs")}
          className={`${
            activeTab === "webs"
              ? "border-[#444] text-[#444]"
              : "border-[#b8b8b8] text-[#b8b8b8] hover:border-[#444] hover:text-[#444]"
          } py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 uppercase whitespace-nowrap`}
        >
          Webs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("wordpress")}
          className={`${
            activeTab === "wordpress"
              ? "border-[#444] text-[#444]"
              : "border-[#b8b8b8] text-[#b8b8b8] hover:border-[#444] hover:text-[#444]"
          } py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 uppercase whitespace-nowrap`}
        >
          WordPress
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("games")}
          className={`${
            activeTab === "games"
              ? "border-[#444] text-[#444]"
              : "border-[#b8b8b8] text-[#b8b8b8] hover:border-[#444] hover:text-[#444]"
          } py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 uppercase whitespace-nowrap`}
        >
          Games
        </button>
      </div>
      {activeTab === "webs" && (
        <div className="w-10/12 lg:w-full h-full container mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-16 pb-20">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center justify-between"
            >
              <Image
                alt={item.title}
                src={item.image}
                width="800"
                height="533"
                className="rounded-2xl object-cover h-full"
              />
              <div className="w-full flex flex-col lg:flex-row justify-between gap-2 items-center px-4 mt-4">
                <h2 className="lg:w-auto xl:truncate text-3xl font-bold text-[#444444]">
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  target={item.link === "" ? "" : "_blank"}
                  className={`${item.style} py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 whitespace-nowrap`}
                >
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "wordpress" && (
        <div className="w-10/12 lg:w-full h-full container mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-16 pb-20">
          {wordpressItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center justify-between"
            >
              <Image
                alt={item.title}
                src={item.image}
                width="800"
                height="533"
                className="rounded-2xl object-cover h-full"
              />
              <div className="w-full flex flex-col lg:flex-row justify-between gap-2 items-center px-4 mt-4">
                <h2 className="lg:w-auto xl:truncate text-3xl font-bold text-[#444444]">
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  target={item.link === "" ? "" : "_blank"}
                  className={`${item.style} py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 whitespace-nowrap`}
                >
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "games" && (
        <div className="w-10/12 lg:w-full h-full container mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-16 pb-20">
          {gamesItems.map((item, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center justify-between"
            >
              <Image
                alt={item.title}
                src={item.image}
                width="800"
                height="533"
                className="rounded-2xl object-cover h-full"
              />
              <div className="w-full flex flex-col lg:flex-row justify-between gap-2 items-center px-4 mt-4">
                <h2 className="lg:w-auto xl:truncate text-3xl font-bold text-[#444444]">
                  {item.title}
                </h2>
                <Link
                  href={item.link}
                  target={item.link === "" ? "" : "_blank"}
                  className={`${item.style} py-2 px-4 border-2 font-semibold rounded-lg transition duration-200 whitespace-nowrap`}
                >
                  {item.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
