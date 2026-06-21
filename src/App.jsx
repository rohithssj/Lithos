import React, { Suspense, useState } from 'react'
import { AxesHelper } from "three";
import Mineral from './components/Mineral'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import InfoPanel from './components/InfoPanel';
import { minerals } from './data/minerals';
import Floor from './components/Floor';
import Pedestal from './components/Pedestal';
import MuseumWalls from './components/MuseumWalls';
import MuseumTitle from './components/MuseumTitle';

const App = () => {
  const [selectedMineral, setSelectedMineral] = useState(null)

  const positions = [
  [-5,0,-5],
  [5,0,-5],
  [-5,0,5],
  [5,0,5],
  [0,0,0]
]

  return (
    <div className='w-screen h-screen bg-black'>
      
      <Canvas camera={{ position: [0, 6, 16], fov: 50 }} shadows>
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[5, 10, 5]} intensity={3}
        />
        <pointLight
        position={[0,8,0]} 
        intensity={30}
        />

        {minerals.map((mineral, index) => {
          return (
            <Mineral
              key={mineral.id}
              position={[positions[index][0], 2, positions[index][2]]}
              mineral={mineral}
              setSelectedMineral={setSelectedMineral}
              castShadow
            />
          )
        })
        }
        <Floor />
        {
          positions.map((pos, index) => {
            return (
              <Pedestal
                key={index}
                position={[pos[0], -0.5, pos[2]]}
              />
            )
          })
        }
        <MuseumWalls />
        <MuseumTitle />
      {/* <OrbitControls /> */}
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