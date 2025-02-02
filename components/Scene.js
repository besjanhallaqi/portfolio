import { Cylinder, Sphere, Float, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { MeshStandardMaterial, BackSide, BoxGeometry } from "three";
import Icons from "./Icons";
import { useFrame } from "@react-three/fiber";

export default function Scene({
  color,
  positionX,
  positionZ,
  icons,
  rotationIcons,
  description,
}) {
  const getColor = (color) => {
    switch (color) {
      case "red":
        return "#7D0000";
      case "yellow":
        return "#f5ea00";
      case "green":
        return "#00af00";
      case "blue":
        return "#0000af";
      case "blues":
        return "#6AD4DD";
      case "lightBlue":
        return "#C6E7FF";
      case "lightGreen":
        return "#B0EBB4";
      case "white":
        return "#ffffff";
      case "milk":
        return "#eeeeee";
      case "grey":
        return "#888888";
      case "lightGrey":
        return "#bbbbbb";
      case "darkGrey":
        return "#666666";
      default:
        return "#000000";
    }
  };

  const [colors, setColor] = useState(getColor(color));
  const groupRef = useRef(null);
  const iconsGroupRef = useRef(null);

  useEffect(() => {
    if (color) {
      setColor(getColor(color));
    }
  }, [color]);

  useFrame(({ clock }) => {
    if (iconsGroupRef.current) {
      const elapsedTime = clock.getElapsedTime();
      iconsGroupRef.current.children.forEach((icon, index) => {
        const angle = (index / icons.length) * Math.PI * 2 + elapsedTime * 0.3;
        const radius = 2;
        icon.position.x = positionX + 5 + radius * Math.cos(angle);
        icon.position.z = positionZ + radius * Math.sin(angle);
        icon.position.y = 0;
        icon.rotation.y += 0.02;
      });
    }
  });

  function BoxGeometryBackSide() {
    const materialSide = new MeshStandardMaterial({
      color: colors,
      side: BackSide,
      metalness: 0.9,
      roughness: 0.8,
    });
    const geometry = new BoxGeometry(7, 7, 7);
    return (
      <mesh
        receiveShadow
        geometry={geometry}
        material={materialSide}
        position={[positionX + 5, 1.9, positionZ]}
        rotation={[0, 0.78, 0]}
      ></mesh>
    );
  }

  return (
    <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <group ref={groupRef}>
        <group ref={iconsGroupRef}>
          {icons.map((item) => (
            <Icons
              key={item.name}
              rotation={rotationIcons}
              url={item.url}
              scale={item.scale}
            />
          ))}
        </group>
        <Float speed={4} rotationIntensity={0} floatIntensity={1}>
          <Sphere args={[1, 32, 32]} position={[positionX + 5, 0, positionZ]}>
            <meshMatcapMaterial color={color} />
          </Sphere>
        </Float>
      </group>
      <BoxGeometryBackSide />
      {description?.textLeft && (
        <Text
          scale={0.2}
          position={description.positionLeft}
          rotation={description.rotationLeft}
        >
          {description.textLeft}
        </Text>
      )}
      {description?.textRight && (
        <Text
          scale={0.1}
          position={description.positionRight}
          rotation={description.rotationRight}
        >
          {description.textRight}
        </Text>
      )}
      <Cylinder
        castShadow
        receiveShadow
        scale={0.7}
        args={[1.1, 1.1, 0.3, 5000]}
        position={[positionX + 5, -1.5, positionZ]}
      >
        <meshStandardMaterial
          color={colors}
          flatShading={true}
          metalness={0.98}
          roughness={0.6}
        />
      </Cylinder>
    </mesh>
  );
}
