import { Center, useGLTF } from "@react-three/drei";
import { minerals } from "../data/minerals";

const Mineral = ({ setSelectedMineral,mineral,position }) => {
  const model = useGLTF("/models/mineral_aragonite.glb");


  return (
    <group position={position}>
      <primitive
        object={model.scene.clone()}
        scale={0.6}
        position={[3.6,0.6,-2.8]}
        onClick={() => {
          setSelectedMineral(mineral)
        }}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default"
        }}
      />
      </group>
  );
};

export default Mineral;