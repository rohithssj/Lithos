import { useTexture } from "@react-three/drei";

const Floor = () => {
  const floorTexture = useTexture("/textures/marble_floor.jpg");

  floorTexture.repeat.set(8, 8);
  floorTexture.wrapS = floorTexture.wrapT = 1000;

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry args={[60, 80]} />

      <meshStandardMaterial
        map={floorTexture}
        roughness={0.25}
        metalness={0.1}
      />
    </mesh>
  );
};

export default Floor;