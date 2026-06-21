import React from "react";

const MuseumWalls = () => {
    return (
        <>
            {/* Back Wall */}
            <mesh position={[0, 5, -15]}>
                <boxGeometry args={[30, 10, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-15, 5, 0]}>
                <boxGeometry args={[1, 10, 30]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            {/* Right Wall */}
            <mesh position={[15, 5, 0]}>
                <boxGeometry args={[1, 10, 30]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </>
    );
};

export default MuseumWalls;