import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="w-10/12 mx-auto py-24 lg:py-0 lg:w-full h-full flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="w-10/12 md:w-96 overflow-hidden aspect-square border-8 border-[#b8b8b8] rounded-full bg-[#b8b8b8]">
          <img
            alt="My image"
            className="w-full h-full object-cover"
            src="../images/me.jpg"
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                  fill="#444444"
                />
              </svg>
              <p>18.06.1999</p>
            </div>
            <div className="flex gap-4 font-regular text-lg items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="#444444"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="#444444"
                />
              </svg>
              <p>12000 Fushë-Kosovë, Kosovë</p>
            </div>
            <div className="flex gap-4 font-regular text-lg items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  fill="#444"
                />
              </svg>
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
