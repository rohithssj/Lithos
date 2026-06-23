import React from "react";

const MuseumWalls = () => {
    return (
        <>
            {/* Back Wall */}
            <mesh position={[0, 6, -15]}>
                <boxGeometry args={[60, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-30, 6, 0]}>
                <boxGeometry args={[1, 15, 30]} />
                <meshStandardMaterial color="#d6d0c8" />
            </mesh>

            {/* Right Wall */}
            <mesh position={[30,6, 0]}>
                <boxGeometry args={[1, 15, 30]} />
                <meshStandardMaterial color="#d6d0c8" />
            </mesh>

            {/* Front Left Wall */}
            <mesh position={[-20, 6, 15]}>
                <boxGeometry args={[20, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" />
            </mesh>

            {/* Front Right Wall */}
            <mesh position={[20, 7.5, 15]}>
                <boxGeometry args={[20, 15, 1]} />
                <meshStandardMaterial color="#d6d0c8" />
            </mesh>
        </>
    );
};

export default MuseumWalls;