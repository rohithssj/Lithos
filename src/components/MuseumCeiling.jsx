const MuseumCeiling = () => {
    return (
        <>
            <mesh
                position={[-10, 12, -15]}
                rotation={[0, 0, Math.PI / 10]}
            >
                <boxGeometry args={[30, 1, 60]} />
                <meshStandardMaterial color="#d2c8ba" />
            </mesh>

            <mesh
                position={[10, 12, -15]}
                rotation={[0, 0, -Math.PI / 10]}
            >
                <boxGeometry args={[30, 1, 60]} />
                <meshStandardMaterial color="#d2c8ba" />
            </mesh>
        </>
    )
}

export default MuseumCeiling