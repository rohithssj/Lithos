import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MuseumSpotlight = ({ position, target }) => {
    const lightRef = useRef();

    useFrame(() => {
        if (!lightRef.current) return;

        lightRef.current.target.position.set(
            target[0],
            target[1],
            target[2]
        );

        lightRef.current.target.updateMatrixWorld();
    });

    return (
        <spotLight
            ref={lightRef}
            position={position}
            intensity={8}
            angle={0.5}
            penumbra={1}
            castShadow = {false}
        />
    );
};

export default MuseumSpotlight;