const MuseumCeiling = () => {
    return (
        <mesh position={[0, 12, 0]}>
            <boxGeometry args={[60, 1, 30]} />
            <meshStandardMaterial color="#cfc8bc" />
        </mesh>
    )
}

export default MuseumCeiling