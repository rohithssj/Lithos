import { Center, Html, useGLTF } from "@react-three/drei";
import { minerals } from "../data/minerals";

const Mineral = ({ setSelectedMineral, mineral, position }) => {
  const model = useGLTF(mineral.model)


  return (
    <group position={position}>
      <Center>
      <primitive
        object={model.scene.clone()}
        scale={mineral.scale}
        position={[0, 0.8, 0]}
        // onClick={() => {
        //   setSelectedMineral(mineral)
        // }}
        onPointerEnter={() => {
          document.body.style.cursor = "pointer"
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default"
        }}
        
      />
      
      </Center>
      {/* <Html position={[0, 0, 0]} center distanceFactor={8}>
        <div className="bg-white/90 px-3 py-1 rounded-lg text-black font-bold shadow-lg">
          {mineral.name}
        </div>

      </Html> */}
    </group>
  );
};

export default Mineral;