import { useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useRef } from "react";

export default function Icons({
  url,
  rotation = 1.5,
  scale = [0.1, 0.1, 0.1],
}) {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotation;
    }
  });

  return (
    <mesh scale={scale} ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
