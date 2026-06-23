import React from 'react'

const Floor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[60,30]} />
            <meshStandardMaterial color={"#8a8175"}/>

        </mesh>
    )
}

export default Floor