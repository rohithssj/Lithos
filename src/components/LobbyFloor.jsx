const LobbyFloor = () => {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.98, 18]}
        >
            <planeGeometry args={[20, 15]} />
            <meshStandardMaterial color="#9f9385" />
        </mesh>
    )
}

export default LobbyFloor