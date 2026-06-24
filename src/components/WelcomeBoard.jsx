import { Html } from "@react-three/drei";

const WelcomeBoard = () => {
    return (
        <mesh position={[0, 5, 18]}>
            <boxGeometry args={[14, 8, 1]} />
            <meshStandardMaterial color="#6f6457" />

            <Html
                transform
                position={[0, 0, 0.55]}
                distanceFactor={8}
            >
                <div className="bg-white/95 backdrop-blur rounded-xl p-6 w-72 text-center shadow-xl">
                    <h1 className="text-3xl font-bold">
                        LITHOS
                    </h1>

                    <p className="mt-2 text-lg">
                        Virtual Mineral Museum
                    </p>

                    <p className="mt-4 text-sm text-gray-600">
                        Explore minerals from around the world
                    </p>
                </div>
            </Html>
        </mesh>
    );
};

export default WelcomeBoard;