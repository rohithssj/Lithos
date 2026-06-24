const Pedestal = ({ position }) => {
  return (
    <group position={position}>


      <mesh position={[0, 0.3, 1.55]}>
        <boxGeometry args={[1.5, 0.5, 0.05]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 3]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>

      {/* Top Slab */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[3.4, 0.2, 3.4]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

    </group>
  );
};

export default Pedestal;