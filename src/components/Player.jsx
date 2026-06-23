import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const Player = ({ minerals, setnearbyMineral }) => {
    const keys = useRef({});
    const previousNearby = useRef(null)

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

    const speed = 5

    useFrame((state, delta) => {
        const direction = new Vector3();

        state.camera.getWorldDirection(direction);



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

            const distanceSquared = dx * dx + dz * dz;

            if (distanceSquared < closestDistance) {
                closestDistance = distance;
                closest = mineral;
            }
        });

        if (closestDistance < 49) {

            if (previousNearby.current !== closest?.id) {
                previousNearby.current = closest.id;
                setnearbyMineral(closest);
            }

        } else {

            if (previousNearby.current !== null) {
                previousNearby.current = null;
                setnearbyMineral(null);
            }

        }

        state.camera.position.x = Math.max(
            -28,
            Math.min(28, state.camera.position.x)
        )

        state.camera.position.z = Math.max(
            -28,
            Math.min(35, state.camera.position.z)
        )

    });


    return null;
};

export default Player;