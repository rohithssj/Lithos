const Columns = ({ position }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[1.5, 10, 1.5]} />
            <meshStandardMaterial color="#cfcfcf" />
        </mesh>
    )
}

export default Columns
