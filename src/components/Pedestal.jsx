import React from 'react'

const Pedestal = ({position}) => {
  return (
    <mesh position={position}>
        <boxGeometry args={[2,1,2]}/>
        <meshStandardMaterial color={"#8f8476"}
        roughness={0.5}
        metalness={0.1}
        />
    </mesh>
    
  )
}

export default Pedestal