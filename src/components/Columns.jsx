const Columns = ({ position }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[1.5, 14, 1.5]} />
            <meshStandardMaterial color="#cfcfcf" />
        </mesh>
    )
}

export default Columns
