const TrackLights = () => {
    const positions = [
        [-20, 12, -20],
        [-10, 12, -20],
        [0, 12, -20],
        [10, 12, -20],
        [20, 12, -20],

        [-20, 12, 0],
        [-10, 12, 0],
        [0, 12, 0],
        [10, 12, 0],
        [20, 12, 0]
    ]

    return (
        <>
            {positions.map((pos, index) => (
                <pointLight
                    key={index}
                    position={pos}
                    intensity={4}
                    color="#fff4d6"
                />
            ))}
        </>
    )
}

export default TrackLights