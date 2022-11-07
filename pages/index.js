import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-10/12 mx-auto py-24 lg:py-0 lg:w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="w-10/12 md:w-96 overflow-hidden aspect-square border-8 border-[#b8b8b8] rounded-full bg-[#b8b8b8]">
          <Image
            width={600}
            height={600}
            alt="My image"
            className="w-full h-full object-cover"
            src="/images/me.jpg"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-[60px] text-[#444444]">
            Hi, I&apos;m Besjan
          </p>
          <p className="font-semibold text-[40px] text-[#444444]">
            I&apos;m a Front-end Developer.
          </p>
          <div className="w-full mt-4 flex flex-col gap-2">
            <div className="flex gap-4 font-regular text-lg items-center">
              <FaBirthdayCake className="text-[#444] text-[24px]" />
              <p>18.06.1999</p>
            </div>
            <div className="flex gap-4 font-regular text-lg items-center">
              <GrLocation className="text-[#444] text-[24px]" />
              <p>12000 Fushë-Kosovë, Kosovë</p>
            </div>
            <div className="flex gap-4 font-regular text-lg items-center">
              <HiOutlineMail className="text-[#444] text-[24px]" />
              <p>besjan_hallaqi@hotmail.com</p>
            </div>
            <div className="mt-4">
              <a
                className="py-2 px-4 border-2 border-[#444] rounded-lg text-lg font-semibold text-[#444] hover:border-white hover:bg-[#b8b8b8] hover:text-white"
                href="../cv/CV-Besjan Hallaqi.pdf"
                download="CV-Besjan Hallaqi"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
