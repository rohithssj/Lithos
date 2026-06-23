const EntranceArch = () => {
    return (
        <>
            {/* Left Pillar */}
            <mesh position={[-5, 4, 22]}>
                <boxGeometry args={[1, 8, 1]} />
                <meshStandardMaterial color="#b8b0a5" />
            </mesh>

            {/* Right Pillar */}
            <mesh position={[5, 4, 22]}>
                <boxGeometry args={[1, 8, 1]} />
                <meshStandardMaterial color="#b8b0a5" />
            </mesh>

            {/* Top Beam */}
            <mesh position={[0, 8, 22]}>
                <boxGeometry args={[10, 1, 1]} />
                <meshStandardMaterial color="#b8b0a5" />
            </mesh>
        </>
    )
}

export default EntranceArch