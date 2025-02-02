import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Scene from "../components/Scene";
import WhiteLight from "../components/WhiteLight";

export default function Home() {
  const jobIcons = [
    {
      url: "/stl-icons/axians.stl",
      scale: [0.18, 0.2, 0.05],
      name: "Axians Kosovo",
    },
    {
      url: "/stl-icons/visiar.stl",
      scale: [0.1, 0.1, 0.05],
      name: "Visiar Healthcare",
    },
    {
      url: "/stl-icons/sponex.stl",
      scale: [0.2, 0.2, 0.05],
      name: "Sponex LLC",
    },
    {
      url: "/stl-icons/procredit-bank.stl",
      scale: [0.2, 0.2, 0.05],
      name: "ProCredit Bank",
    },
  ];

  const studyIcons = [
    {
      url: "/stl-icons/ubt.stl",
      scale: [0.15, 0.15, 0.05],
      name: "University of Business\n and Technology",
    },
  ];

  const doingIcons = [
    {
      url: "/stl-icons/website.stl",
      scale: [0.18, 0.18, 0.05],
      name: "Website",
    },
    {
      url: "/stl-icons/games.stl",
      scale: [0.18, 0.18, 0.05],
      name: "Games",
    },
    {
      url: "/stl-icons/wordpress.stl",
      scale: [0.18, 0.18, 0.05],
      name: "Wordpress",
    },
  ];

  const skillsIcons = [
    {
      url: "/stl-icons/material-ui.stl",
      scale: [0.11, 0.11, 0.05],
      name: "Material UI",
    },
    {
      url: "/stl-icons/next.stl",
      scale: [0.1, 0.1, 0.05],
      name: "Next",
    },
    {
      url: "/stl-icons/react.stl",
      scale: [0.13, 0.13, 0.05],
      name: "React",
    },
    {
      url: "/stl-icons/tailwind.stl",
      scale: [0.1, 0.1, 0.05],
      name: "Tailwind CSS",
    },
    {
      url: "/stl-icons/three.stl",
      scale: [0.1, 0.1, 0.05],
      name: "Three",
    },
    {
      url: "/stl-icons/typescript.stl",
      scale: [0.1, 0.1, 0.05],
      name: "TypeScript",
    },
    {
      url: "/stl-icons/shadcn.stl",
      scale: [0.25, 0.25, 0.05],
      name: "Shadcn UI",
    },
    {
      url: "/stl-icons/next-ui.stl",
      scale: [0.1, 0.1, 0.1],
      name: "Next UI",
    },
  ];

  const studyDescription = {
    textLeft: `Meet Besjan \nFront-End Developer`,
    positionLeft: [-3, 1.5, 3.06],
    rotationLeft: [0, 0.78, 0.07],
    textRight: `\n\n\n\nDedicated to delivering \nhigh-quality, user-friendly web solutions\n\nGraduated from UBT University \nwith a Bachelor's degree in \nComputer Science and Engineering`,
    positionRight: [3, 1.5, 3.06],
    rotationRight: [0, -0.79, -0.08],
  };

  const skillsDescription = {
    textLeft: `Skills`,
    positionLeft: [3, 1.5, 2.94],
    rotationLeft: [0, 2.35, 0.07],
    textRight: `\n\n\n       React                           Three\n                          Next\n    Typescript                     TailwindCSS\n\nNextUI          MaterialUI           Shadcn`,
    positionRight: [3, 1.5, -2.94],
    rotationRight: [0, 0.78, -0.11],
  };

  const jobsDescription = {
    textLeft: `Experience`,
    positionLeft: [3.1, 1.5, -3.16],
    rotationLeft: [0, -2.38, 0.07],
    textRight: `\n\nVisiar HealthCare\nFrom: 03/2024 To: Current\n\nAxians Kosovo\nFrom: 02/2023 To: 03/2024\n\nSponex L.L.C.\nFrom: 10/2021 To: 12/2022\n\nProCredit Bank\nFrom: 07/2020 To: 10/2020`,
    positionRight: [-2.9, 1.5, -2.96],
    rotationRight: [0, 2.35, -0.04],
  };

  const doingDescription = {
    textLeft: `Expertise`,
    positionLeft: [-3.1, 1.5, -3.04],
    rotationLeft: [0, -0.8, 0.07],
    textRight: `\n\n\n\n\nWebsite Development\n    Responsive, high-performance \n    web applications\n\nGame Development\n    Engaging experiences \n    using modern game engines\n\nWordPress Development\n    Custom themes, plugins, \n    and performance optimization`,
    positionRight: [-3.3, 1.5, 3.24],
    rotationRight: [0, -2.361, -0.05],
  };

  const [landscapeMode, setLandscapeMode] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isWideScreen = window.innerWidth > 1023;
      const isMobileLandscape =
        window.screen.orientation?.type.includes("landscape") ||
        window.innerWidth > window.innerHeight;

      setLandscapeMode(isWideScreen || isMobileLandscape);
    };
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      {!landscapeMode && (
        <div className="rotate-message fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white text-lg">
          Please rotate your device to landscape mode.
        </div>
      )}
      {landscapeMode && (
        <Canvas className="bg-black">
          <Suspense
            fallback={
              <Html>
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-500"></div>
                </div>
              </Html>
            }
          >
            <PerspectiveCamera makeDefault position={[0, 0, 9]} fov={60} />
            <mesh position={[0, 0, 0]}>
              <Scene
                color="milk"
                positionX={-5}
                positionZ={5}
                icons={studyIcons}
                description={studyDescription}
                rotationIcons={6.2}
              />
              <Scene
                color="grey"
                positionX={0}
                positionZ={0}
                description={skillsDescription}
                icons={skillsIcons}
                rotationIcons={1.5}
              />
              <Scene
                color="lightGrey"
                positionX={-5}
                positionZ={-5}
                icons={jobIcons}
                description={jobsDescription}
                rotationIcons={9.2}
              />
              <Scene
                color="darkGrey"
                positionX={-10}
                positionZ={0}
                icons={doingIcons}
                description={doingDescription}
                rotationIcons={4.8}
              />
            </mesh>
            <WhiteLight />
            <OrbitControls
              enableRotate={true}
              target={[0, 0, 0]}
              minDistance={8}
              maxDistance={9}
              minPolarAngle={1.572}
              maxPolarAngle={1.572}
            />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
