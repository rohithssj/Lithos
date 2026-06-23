import { Text } from "@react-three/drei";

const MuseumTitle = () => {
  return (
    <>
      <Text
        position={[0, 10, -28]}
        fontSize={2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        LITHOS
      </Text>

      <Text
        position={[0, 8.5, -28]}
        fontSize={0.8}
        color="#d9d9d9"
        anchorX="center"
        anchorY="middle"
      >
        Virtual Mineral Museum
      </Text>
    </>
  );
};

export default MuseumTitle;