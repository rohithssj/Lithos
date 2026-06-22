import React, { Suspense, useState, useEffect } from 'react'
import Mineral from './components/Mineral'
import { Canvas } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import InfoPanel from './components/InfoPanel';
import { minerals } from './data/minerals';
import Floor from './components/Floor';
import Pedestal from './components/Pedestal';
import MuseumWalls from './components/MuseumWalls';
import MuseumTitle from './components/MuseumTitle';
import Player from './components/Player';
import ControlsOverlay from './components/ControlsOverlay';

const App = () => {
  const [selectedMineral, setSelectedMineral] = useState(null)
  const [mode, setMode] = useState("home")
  const [showPointerMessage, setShowPointerMessage] = useState(true)
  const [nearbyMineral, setnearbyMineral] = useState(null)

  const positions = [
    [-5, 0, -5],
    [5, 0, -5],
    [-5, 0, 5],
    [5, 0, 5],
    [0, 0, 0]
  ]

  const mineralData = minerals.map((mineral, index) => ({
    ...mineral,
    position: positions[index]
  }))

  const handleEnterMuseum = async () => {
    try {
      await document.documentElement.requestFullscreen();
      setMode("explore");
      setShowPointerMessage(true)

      setTimeout(() => {
        setShowPointerMessage(false)
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  };

  const handleExitMuseum = () => {

    document.exitPointerLock?.();

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    setSelectedMineral(null);
    setNearbyMineral(null);

    setMode("home");
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === "e" && nearbyMineral) {
        setSelectedMineral(nearbyMineral)
        setMode("inspect")
        document.exitPointerLock()
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [nearbyMineral]);

  return (
    <div className='w-screen h-screen bg-black'>

      <Canvas camera={{ position: [0, 6, 16], fov: 50 }} shadows>
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          position={[5, 10, 5]} intensity={3}
        />
        <pointLight
          position={[0, 8, 0]}
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

        {
          mode === "explore" && (
            <PointerLockControls />

          )
        }
        {
          mode === "explore" && (
            <Player minerals={mineralData} setnearbyMineral={setnearbyMineral} />

          )
        }





        <Floor />
        <MuseumWalls />
        <MuseumTitle />
      </Canvas>
      {
        selectedMineral && (
          <InfoPanel mineral={selectedMineral}
            setSelectedMineral={setSelectedMineral}
            setMode={setMode}
          />
        )
      }

      {
        mode === "home" && (
          <div className='absolute inset-0 flex justify-center items-center z-50'>
            <button className='px-6 py-3 bg-white rounded-lg'
              onClick={handleEnterMuseum}
            >
              Start Exploring

            </button>

          </div>
        )
      }

      {
        mode === "explore" && showPointerMessage && (
          <div className='absolute inset-0 flex justify-center items-center z-40 pointer-events-none'>
            <div className='bg-black/70 text-white px-6 py-3 rounded-lg'>
              Click Anywhere To Enter Museum
            </div>

          </div>
        )
      }



      {
        mode === "explore" && (
          <div className='absolute top-1/2 left-1/2 text-white text-3xl z-50'
            style={{ transform: "translate(-50%,-50%)" }}
          >
            +
          </div>
        )
      }

      {
        mode === "explore" &&
        nearbyMineral && (
          <div
            className="absolute top-[55%] left-1/2 text-white z-50"
            style={{ transform: "translateX(-50%)" }}
          >
            Press E to inspect {nearbyMineral.name}
          </div>
        )
      }


      {
        (mode === "explore") && (
          <ControlsOverlay />
        )
      }


      {
        mode === "explore" || mode === "inspect" && (
          <button
            className="absolute top-5 left-5 z-50 bg-white px-4 py-2 rounded"
            onClick={handleExitMuseum}
          >
            Exit Museum
          </button>
        )
      }


    </div>
  )
}

export default App