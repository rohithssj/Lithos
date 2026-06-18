import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const Mineral = () => {

  const Animate = ({size,color})=>{
    const ref = useRef()

    useFrame((state,delta)=>{
    ref.current.rotation.x+=delta *0.5
    ref.current.rotation.y+=delta *0.6
    ref.current.rotation.z+=delta *0.6

    // ref.current.position.z += Math.sin(state.clock.elapsedTime)*0.2
    })

    return(
      <mesh ref={ref}>
        <boxGeometry args={size}/>
      <meshStandardMaterial color={color} roughness={0.5} metalness={2}/>

      </mesh>
    )
  }
  return (
    <div className='w-screen h-screen bg-black'>
      <Canvas camera={{position:[0,0,5], fov:50}}>
        <ambientLight intensity={1.2}/>
        <directionalLight position={[5,3,1]} intensity={2}/>
        
        <Animate size={[1,1,1]} color={"orange"}/>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Mineral