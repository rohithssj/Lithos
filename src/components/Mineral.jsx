import { Center, useGLTF } from "@react-three/drei";
import { minerals } from "../data/minerals";

const Mineral = ({ setSelectedMineral }) => {
  const model = useGLTF("/models/mineral_aragonite.glb");


  return (
    <Center>
      <primitive
        object={model.scene}
        scale={0.6}
        position={[0, 1, 0]}
        onClick={() => {
          setSelectedMineral(minerals[0])
        }}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default"
        }}
      />
    </Center>
  );
};

export default Mineral;