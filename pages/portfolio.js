import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Portfolio() {
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
      link: "https://dea-preview.netlify.app/",
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
      title: "Fight4Cure",
      image: "/images/portfolio/f4c.jpg",
      style:
        "text-[#b34141] border-[#b34141] shadow-md shadow-[#b3414180] hover:bg-[#b34141] hover:text-white",
      label: "Private",
      link: "",
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
      label: "Private",
      link: "",
    },
  ];
  return (
    <DefaultLayout>
      <div className="w-10/12 lg:w-full h-full container mx-auto grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 py-20 gap-16">
        {portfolioItems.map((item, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <Image
              alt={item.title}
              src={item.image}
              width="600"
              height="400"
              className="rounded-2xl"
            />
            <div className="w-full flex flex-col lg:flex-row justify-between gap-2 items-center px-4 mt-4">
              <h2 className="text-3xl font-bold text-[#444444]">
                {item.title}
              </h2>
              <Link
                href={item.link}
                target={item.link === "" ? "" : "_blank"}
                className={`${item.style} py-2 px-4 border-2 font-semibold rounded-lg transition duration-200`}
              >
                {item.label}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}
