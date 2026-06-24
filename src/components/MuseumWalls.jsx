import React from "react";
import { useTexture } from "@react-three/drei";

const MuseumWalls = () => {
    const wallTexture = useTexture("/textures/museum_wall.jpg");
    return (
        <>
            {/* Back Wall */}
            <mesh position={[0, 7.5, -45]}>
                <boxGeometry args={[60, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" map={wallTexture} />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-30, 7.5, -15]}>
                <boxGeometry args={[1, 15, 60]} />
                <meshStandardMaterial color="#d6d0c8" map={wallTexture} />
            </mesh>

            {/* Right Wall */}
            <mesh position={[30, 7.5, -15]}>
                <boxGeometry args={[1, 15, 60]} />
                <meshStandardMaterial color="#d6d0c8" map={wallTexture}/>
            </mesh>

            {/* Front Left Wall */}
            <mesh position={[-20, 7.5, 15]}>
                <boxGeometry args={[20, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" map={wallTexture} />
            </mesh>

            {/* Front Right Wall */}
            <mesh position={[20, 7.5, 15]}>
                <boxGeometry args={[20, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" map={wallTexture}/>
            </mesh>
        </>
    );
};

export default MuseumWalls;