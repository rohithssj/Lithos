import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Player = ({minerals,setnearbyMineral}) => {
    const keys = useRef({});

    useEffect(() => {
        const down = (e) => {
            keys.current[e.key.toLowerCase()] = true;
        };

        const up = (e) => {
            keys.current[e.key.toLowerCase()] = false;
        };

        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);

        return () => {
            window.removeEventListener("keydown", down);
            window.removeEventListener("keyup", up);
        };
    }, []);

    useFrame((state, delta) => {
        const speed = 5;

        if (keys.current["w"]) {
            state.camera.position.z -= speed * delta;
        }

        if (keys.current["s"]) {
            state.camera.position.z += speed * delta;
        }

        if (keys.current["a"]) {
            state.camera.position.x -= speed * delta;
        }

        if (keys.current["d"]) {
            state.camera.position.x += speed * delta;
        }

        const cameraPos = state.camera.position;

        let closest = null;
        let closestDistance = Infinity;

        minerals.forEach((mineral) => {

            const dx = cameraPos.x - mineral.position[0];
            const dz = cameraPos.z - mineral.position[2];

            const distance = Math.sqrt(dx * dx + dz * dz);

            if (distance < closestDistance) {
                closestDistance = distance;
                closest = mineral;
            }
        });

        if (closestDistance < 4) {
            setnearbyMineral(closest);
        } else {
            setnearbyMineral(null);
        }
    });

    return null;
};

export default Player;