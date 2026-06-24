const Columns = ({ position }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[1.5, 18, 1.5]} />
            <meshStandardMaterial color="#cfcfcf" />
        </mesh>
    )
}

export default Columns
