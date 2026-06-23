import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const Player = ({ minerals, setnearbyMineral }) => {
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
        const speed = 5
        const direction = new Vector3();

        state.camera.getWorldDirection(direction);

        state.camera.position.x = Math.max(
            -28,
            Math.min(28, state.camera.position.x)
        )

        state.camera.position.z = Math.max(
            -13,
            Math.min(13, state.camera.position.z)
        )

        direction.y = 0;
        direction.normalize();


        if (keys.current["w"]) {
            state.camera.position.addScaledVector(
                direction,
                speed * delta
            );
        }

        if (keys.current["s"]) {
            state.camera.position.addScaledVector(
                direction,
                -speed * delta
            );
        }

        const right = new Vector3();

        right.crossVectors(
            direction,
            state.camera.up
        ).normalize();


        if (keys.current["a"]) {
            state.camera.position.addScaledVector(
                right,
                -speed * delta
            );
        }

        if (keys.current["d"]) {
            state.camera.position.addScaledVector(
                right,
                speed * delta
            );
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

        if (closestDistance < 7) {
            setnearbyMineral(closest);
        } else {
            setnearbyMineral(null);
        }
    });

    return null;
};

export default Player;