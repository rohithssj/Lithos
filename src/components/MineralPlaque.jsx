import { Html } from "@react-three/drei";

const MineralPlaque = ({ mineral, position }) => {
    return (
        <Html
            position={[
                position[0],
                0.1,
                position[2] + 2
            ]}
            center
        >
            <div className="bg-white px-3 py-2 rounded-lg shadow-lg text-center min-w-[120px]">
                <h3 className="font-bold text-black">
                    {mineral.name}
                </h3>

                <p className="text-xs text-gray-600">
                    {mineral.formula}
                </p>
            </div>
        </Html>
    );
};

export default MineralPlaque;