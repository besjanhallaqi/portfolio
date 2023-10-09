import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function DefaultLayout({ footerStyle, children }) {
  const router = useRouter();

  const menu = [
    { link: "/", title: "Home" },
    { link: "/portfolio", title: "Portfolio" },
    { link: "/about-me", title: "About Me" },
  ];

  const footer = [
    {
      link: "https://www.facebook.com/hallaqi.besjan",
      content: <FaFacebookF className="text-[#444] text-[24px]" />,
    },
    {
      link: "https://www.instagram.com/besjan.h/",
      content: <FaInstagram className="text-[#444] text-[24px]" />,
    },
    {
      link: "https://github.com/besjanhallaqi",
      content: <FaGithub className="text-[#444] text-[24px]" />,
    },
    {
      link: "https://www.linkedin.com/in/besjan-hallaqi-46692418a",
      content: <FaLinkedinIn className="text-[#444] text-[24px]" />,
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between bg-[#f8f8f8] lg:px-12">
      <div className="w-full flex flex-wrap items-center justify-center pt-8 gap-8 lg:gap-20 text-xl font-regular text-[#444444]">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`hover:text-[#b8b8b8] pb-2 border-b-2 ${
              router.asPath === item.link
                ? "border-[#444444]"
                : "border-[#b8b8b8]"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {children}
      <div
        className={`${footerStyle} w-full flex items-center justify-center pb-8 gap-6`}
      >
        {footer.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            {item.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
