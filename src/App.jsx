import React, { Suspense } from 'react'
import { AxesHelper } from "three";
import Mineral from './components/Mineral'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />
        <Mineral />
        <OrbitControls />  
        </Canvas>
    </div>
  )
}

export default App