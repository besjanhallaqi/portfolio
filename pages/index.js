import DefaultLayout from "../layouts/DefaultLayout";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-10/12 mx-auto py-24 lg:py-0 lg:w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="w-full m-4 md:m-0 md:w-96 overflow-hidden aspect-square border-8 border-[#b8b8b8] rounded-full bg-[#b8b8b8]">
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
          <div className="w-full mt-4 flex flex-col gap-2 text-[#444444]">
            <div className="flex gap-4 font-regular text-lg items-center">
              <FaBirthdayCake className="text-[#444] text-[24px]" />
              <p>18.06.1999</p>
            </div>
            <div className="flex gap-4 font-regular text-lg items-center">
              <GrLocation className="text-[#444] text-[24px]" />
              <p>12000 Fushë-Kosovë, Kosovë</p>
            </div>
            <Link
              href="mailto:besjan_hallaqi@hotmail.com"
              className="flex gap-4 font-regular text-lg items-center group"
            >
              <HiOutlineMail className="text-[#444] text-[24px]" />
              <p className="group-hover:underline">
                besjan_hallaqi@hotmail.com
              </p>
            </Link>
            <div className="flex gap-4 mt-2">
              <a
                target="_blank"
                className="py-2 px-4 border-2 border-[#444] rounded-lg text-lg font-semibold text-[#444] hover:border-white hover:bg-[#b8b8b8] hover:text-white"
                href="../cv/CV-Besjan-Hallaqi.pdf"
              >
                View CV
              </a>
              <Link
                target="_blank"
                className="py-2 px-4 border-2 border-[#444] rounded-lg text-lg font-semibold text-[#444] hover:border-white hover:bg-[#b8b8b8] hover:text-white"
                href="/3d"
              >
                Portfolio 3D
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
