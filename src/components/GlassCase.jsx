const GlassCase = ({ position }) => {
    return (
        <mesh position={position}>
            <boxGeometry args={[4, 4, 4]} />
            <meshPhysicalMaterial
                transparent
                opacity={0.45}
                roughness={0}
                transmission={1}
                // thickness={0.2}
                color="#ffffff"
            />
        </mesh>
    )
}

export default GlassCase