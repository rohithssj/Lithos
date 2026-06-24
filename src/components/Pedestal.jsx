const Pedestal = ({ position }) => {
  return (
    <group position={position}>

      <mesh>
        <boxGeometry args={[2, 2.5, 2]} />
        <meshStandardMaterial
          color="#d4d0c8"
          roughness={0.5}
        />
      </mesh>

      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.05, 32]} />
        <meshStandardMaterial
          emissive="#ffe6b8"
          emissiveIntensity={1}
        />
      </mesh>

    </group>
  );
};

export default Pedestal;