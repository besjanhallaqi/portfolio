import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function CV() {
  const downloadCV = useRef();
  const handleDownloadCV = useReactToPrint({
    content: () => downloadCV.current,
  });

  const cvJehona = {
    name: "Jehona",
    surname: "Rrahmani",
    image_url: "/images/jehona.jpg",
    email: "jehonarrahmani061@gmail.com",
    birthday: "27/11/1997",
    phone_number: "+383 49 588 917",
    address: "10000 Prishtinë, Kosovë",
    role: "Finance and Accountant Assistant",
    description_of_me:
      "As a Finance Assistant, my goal is to support organizations in achieving their financial objectives. With a strong foundation in financial analysis, budgeting, and risk management, I am dedicated to optimizing financial processes and providing actionable insights. <br/> In my role as an Accountant Assistant, I am passionate about maintaining the financial health of organizations. I excel in tasks such as data entry, reconciliations, and financial record-keeping.",
    experience: [
      {
        from: "09/2022",
        to: "10/2023",
        company_name: "Provit ShPK",
        your_role: "Account Assistant",
        your_responsibilities: [
          "Assisted in the preparation of financial statements, income statements, and balance sheets.",
          "Conducted data entry and maintained accurate financial records.",
          "Supported the month-end and year-end closing processes.",
          "Assisted with accounts payable and accounts receivable tasks.",
          "Conducted bank reconciliations to ensure accuracy of financial data.",
          "Collaborated with the accounting team to resolve discrepancies and errors.",
          "Prepared and filed financial reports and tax documents.",
          "Contributed to budgeting and forecasting activities.",
        ],
      },
      {
        from: "06/2021",
        to: "05/2022",
        company_name: "GSM ShPK",
        your_role: "Finance Manager",
        your_responsibilities: [
          "Led financial analysis efforts to support decision-making and strategic planning.",
          "Managed budgeting and forecasting processes, ensuring alignment with organizational goals.",
          "Conducted in-depth financial research and analysis to identify investment opportunities and risks.",
          "Collaborated with cross-functional teams to optimize capital allocation.",
          "Developed and monitored key performance indicators (KPIs) to track financial performance.",
          "Implemented risk management strategies to safeguard financial assets.",
          "Assisted in the preparation of financial reports for senior management and external stakeholders.",
        ],
      },
    ],
    education: [
      {
        from: "02/2023",
        to: "Current",
        college_name: "IKAF",
        education_title: "Certified accountant",
        degree: "Certified accountant",
      },
      {
        from: "09/2022",
        to: "02/2023",
        college_name: "IKAF",
        education_title: "Accounting technician",
        degree: "Accounting technician",
      },
      {
        from: "10/2017",
        to: "09/2021",
        college_name: "UP 'Hasan Prishtina'",
        education_title: "Accounting and Finance",
        degree: "Bachelor",
      },
    ],
    languages: [
      { name: "English", level: "Advanced" },
      { name: "Albanian", level: "Native" },
    ],
    skills: [
      "Account Management",
      "Financial Reporting",
      "Financial Accounting",
      "Financial Analysis",
      "Cash Flow",
      "Banking",
      "Cost Accounting",
      "Accounts Receivable (AR)",
      "Accounts Payable (AP)",
    ],
  };

  const cv = {
    name: "Besjan",
    surname: "Hallaqi",
    image_url: "/images/me.jpg",
    email: "besjan_hallaqi@hotmail.com",
    website_url: "besjan-hallaqi-portfolio.netlify.app",
    birthday: "18/06/1999",
    phone_number: "+383 49 840 037",
    address: "12000 Fushë Kosovë, Kosovë",
    role: "Front-end developer",
    description_of_me:
      "Passionate Front-End Developer with expertise in React.js, dedicated to creating responsive and user-friendly web applications. Proficient in modern web technologies, I blend creativity and technical prowess to deliver engaging digital experiences. Committed to continuous learning and collaboration with cross-functional teams to drive innovation in web development.",
    experience: [
      {
        from: "02/2023",
        to: "Current",
        company_name: "Axians Kosovo",
        your_role: "React developer",
        your_responsibilities: [
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
        from: "10/2021",
        to: "12/2022",
        company_name: "Sponex L.L.C.",
        your_role: "Front-end developer",
        your_responsibilities: [
          "Proficient in HTML, CSS, TailwindCSS, ReactJS, NextJS, TypeScript, and other relevant web design coding languages",
          "Creating and testing applications for websites",
          "Collaboration with team",
          "Working with graphics and other designers",
          "Finding solutions for a different variations of website problems",
          "Maintaining and updating websites",
          "Staying up-to-date on technology",
        ],
      },
      //   {
      //     from: "07/2020",
      //     to: "10/2020",
      //     company_name: "ProCredit Bank",
      //     your_role: "Intern",
      //     your_responsibilities: [
      //       "Finished Internship for MIS department in bank",
      //       "Created reports from database to the all departments in the bank",
      //       "Used queries in MSSQL for generating reports",
      //     ],
      //   },
    ],
    education: [
      {
        from: "09/2017",
        to: "08/2023",
        college_name: "University of Business and Technology",
        education_title: "Computer Science and Engineering",
        degree: "Bachelor",
      },
    ],
    languages: [
      { name: "English", level: "Advanced" },
      { name: "Albanian", level: "Native" },
    ],
    skills: [
      "ReactJS",
      "TypeScript",
      "NextJS",
      "ThreeJS",
      "JavaScript",
      "TailwindCSS",
      "MaterialUI",
      "WordPress",
      "HTML",
      "CSS",
    ],
  };

  return (
    <>
      <button
        onClick={handleDownloadCV}
        className="py-2 px-4 border-2 border-[#444] rounded-lg text-lg font-semibold text-[#444] hover:border-white hover:bg-[#b8b8b8] hover:text-white"
      >
        Download CV
      </button>
      <div className="w-screen h-screen hidden">
        <div
          ref={downloadCV}
          className="relative flex bg-white min-h-screen w-screen "
        >
          <div className="w-[35%] border-r-2 border-[#b8b8b888] py-12 px-8 text-[#444]">
            <div className="w-[80%] ml-[10%] aspect-square rounded-full overflow-hidden">
              <img
                width={600}
                height={600}
                alt="My image"
                className="w-full h-full object-cover"
                src={cv.image_url}
              />
            </div>
            <p className="italic font-semibold mt-4 text-2xl ">Contacts</p>
            {cv.email && (
              <div className="flex mt-1 items-center gap-1 text-sm">
                <div className="w-5 h-5 bg-[#b8b8b8] rounded-full flex items-center justify-center overflow-hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p>{cv.email}</p>
              </div>
            )}
            {cv.phone_number && (
              <div className="flex mt-1 items-center gap-1 text-sm">
                <div className="w-5 h-5 bg-[#b8b8b8] rounded-full flex items-center justify-center overflow-hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                      fill="#fff"
                    />
                    <path
                      d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                      fill="#fff"
                    />
                    <path
                      d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p>{cv.phone_number}</p>
              </div>
            )}
            {cv.address && (
              <div className="flex mt-1 items-center gap-1 text-sm">
                <div className="w-5 h-5 bg-[#b8b8b8] rounded-full flex items-center justify-center overflow-hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                      fill="#fff"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p>{cv.address}</p>
              </div>
            )}
            {cv.website_url && (
              <div className="flex w-[110%] mt-1 items-center gap-1 text-sm">
                <div className="w-5 h-5 bg-[#b8b8b8] rounded-full flex items-center justify-center overflow-hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.325 3.05011L8.66741 20.4323L10.5993 20.9499L15.2568 3.56775L13.325 3.05011Z"
                      fill="#fff"
                    />
                    <path
                      d="M7.61197 18.3608L8.97136 16.9124L8.97086 16.8933L3.87657 12.1121L8.66699 7.00798L7.20868 5.63928L1.04956 12.2017L7.61197 18.3608Z"
                      fill="#fff"
                    />
                    <path
                      d="M16.388 18.3608L15.0286 16.9124L15.0291 16.8933L20.1234 12.1121L15.333 7.00798L16.7913 5.63928L22.9504 12.2017L16.388 18.3608Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p className="whitespace-nowrap">{cv.website_url}</p>
              </div>
            )}
            <div className="w-full my-4 h-[2px] bg-[#b8b8b888] rounded-full overflow-hidden"></div>
            <p className="italic font-semibold mt-4 text-2xl ">Skills</p>
            <p className="text-sm mt-1">{cv.skills.join(", ")}</p>
            <p className="italic font-semibold mt-4 text-2xl ">Languages</p>
            {cv.languages.map((item) => (
              <p key={item.name} className="text-sm mt-1">
                {item.name}
                {": "}
                {item.level}
              </p>
            ))}
          </div>
          <div className="w-[65%] h-full pt-12 px-8 text-[#444]">
            <p className="italic tracking-wider leading-tight text-[56px] ">
              {cv.name}
            </p>
            <p className="italic leading-tight text-[56px]">
              &ensp;{cv.surname}
            </p>
            <p className="text-lg mt-1">{cv.role}</p>
            <div className="w-full mb-4 h-[2px] bg-[#b8b8b888] rounded-full overflow-hidden"></div>
            <p className="italic font-semibold mt-4 text-2xl">Summary</p>
            <p
              className="mt-1 text-sm"
              dangerouslySetInnerHTML={{ __html: cv.description_of_me }}
            ></p>
            <p className="italic font-semibold mt-4 text-2xl">Experience</p>
            {cv.experience.map((item, index) => (
              <div key={index} className={`${index === 0 ? "mt-1" : "mt-3"} `}>
                <p>
                  <b>{item.your_role}</b> at <b>{item.company_name}</b>
                </p>
                <p>
                  {item.from} - {item.to}
                </p>
                <ul className="list-disc ml-8">
                  {item.your_responsibilities.map(
                    (responsibility, resIndex) => (
                      <li key={resIndex} className="text-sm">
                        {responsibility}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
            <p className="italic font-semibold mt-4 text-2xl">Education</p>
            {cv.education.map((item, index) => (
              <div key={index} className={`${index === 0 ? "mt-1" : "mt-3"} `}>
                <p>
                  <b>{item.degree}</b> for <b>{item.education_title}</b>
                </p>
                <p>
                  At <b>{item.college_name}</b>
                </p>
                <p>
                  {item.from} - {item.to}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
