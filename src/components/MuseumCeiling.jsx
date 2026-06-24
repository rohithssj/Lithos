import { useTexture } from "@react-three/drei";

const MuseumCeiling = () => {
    const ceilingTexture = useTexture("/textures/ceiling.jpg");

    return (
        <>
            <mesh
                position={[-10, 13.5, -15]}
                rotation={[0, 0, Math.PI / 10]}
            >
                <boxGeometry args={[30, 1, 60]} />
                <meshStandardMaterial
                    map={ceilingTexture}
                    // roughness={0.25}
                    metalness={0.1}
                />
            </mesh>

            <mesh
                position={[10, 13.5, -15]}
                rotation={[0, 0, -Math.PI / 10]}
            >
                <boxGeometry args={[30, 1, 60]} />
                <meshStandardMaterial
                    map={ceilingTexture}
                    // roughness={0.25}
                    metalness={0.1}
                />
            </mesh>
        </>
    );
};

export default MuseumCeiling