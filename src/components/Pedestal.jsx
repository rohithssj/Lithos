import React from 'react'

const Pedestal = ({position}) => {
  return (
    <mesh position={position}>
        <boxGeometry args={[2,1,2]}/>
        <meshStandardMaterial color={"white"}/>
    </mesh>
    
  )
}

export default Pedestal