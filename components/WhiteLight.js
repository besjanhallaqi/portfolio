import { SpotLight } from "@react-three/drei";
export default function WhiteLight() {
  return (
    <mesh>
      <ambientLight intensity={6} />
      <SpotLight
        position={[-7, 6, -5]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={20}
        color="#fff"
      />
      <SpotLight
        position={[-8, 3, 5.3]}
        distance={10}
        angle={0.3}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[-10, 0, 0]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[10, -4, -4.8]}
        distance={10}
        angle={0.45}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[9, 3.5, 4.5]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={20}
        color="#fff"
      />
      <SpotLight
        position={[10, 0, 0]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[5, 3.5, -10]}
        distance={10}
        angle={0.4}
        attenuation={1}
        anglePower={100}
        intensity={40}
        color="#fff"
      />
      <SpotLight
        position={[-6, 3.5, -10]}
        distance={10}
        angle={0.25}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[0, 0, -10]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[-5.3, -3.5, 10]}
        distance={10}
        angle={0.4}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[6.5, 1, 10]}
        distance={10}
        angle={0.25}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <SpotLight
        position={[0, 0, 10]}
        distance={10}
        angle={0.5}
        attenuation={1}
        anglePower={100}
        intensity={100}
        color="#fff"
      />
      <directionalLight
        castShadow={false}
        position={[-3, -2, 2]}
        intensity={0.75}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={"#fff"}
      />
      <directionalLight
        castShadow={true}
        position={[0, 4, 0]}
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        color={"#fff"}
      />
    </mesh>
  );
}
