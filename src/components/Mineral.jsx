import { Center, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Mineral = () => {
  const model = useGLTF("/models/mineral_aragonite.glb");


  return (
    <Center>
    <primitive
      object={model.scene}
      scale={0.6}
      position={[0, 1, 0]}
    />
    </Center>
  );
};

export default Mineral;