import React from 'react'

const Floor = () => {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[40,40]} />
            <meshStandardMaterial color={"#c8b27d"}/>

        </mesh>
    )
}

export default Floor