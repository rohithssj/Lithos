import React, { Suspense, useState } from 'react'
import { AxesHelper } from "three";
import Mineral from './components/Mineral'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import InfoPanel from './components/InfoPanel';
import { minerals } from './data/minerals';

const App = () => {
  const [selectedMineral,setSelectedMineral] = useState(null)
  return (
    <div className='w-screen h-screen bg-black'>
      <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} />

        <Mineral setSelectedMineral={setSelectedMineral}/>
        
        <OrbitControls />  
        </Canvas>
        {
          selectedMineral && (
          <InfoPanel mineral={selectedMineral}
          setSelectedMineral={setSelectedMineral}
          />
        )
        }
    </div>
  )
}

export default App