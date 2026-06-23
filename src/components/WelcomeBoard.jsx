import { Html } from "@react-three/drei"

const WelcomeBoard = () => {
    return (
        <>
            {/* Sign Board */}
            <mesh position={[0, 5, 22]}>
                <boxGeometry args={[8, 5, 0.3]} />
                <meshStandardMaterial color="#8a8175" />

                <Html center>
                    <div className="bg-white p-6 rounded-xl text-center w-64">
                        <h1 className="font-bold text-3xl mb-2">
                            LITHOS
                        </h1>

                        <p className="text-lg mb-4">
                            Virtual Mineral Museum
                        </p>

                        <p className="text-sm text-gray-600">
                            Explore minerals from around the world
                        </p>
                    </div>
                </Html>
            </mesh>

            {/* Stand */}
            <mesh position={[0, 1.5, 15]}>
                <boxGeometry args={[0.5, 3, 0.5]} />
                <meshStandardMaterial color="#555" />
            </mesh>
        </>
    )
}

export default WelcomeBoard