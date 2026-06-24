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
import MuseumSpotlight from './components/MuseumSpotlight';
import MuseumCeiling from './components/MuseumCeiling';
import Columns from './components/Columns';
import WelcomeBoard from './components/WelcomeBoard';
import EntranceArch from './components/EntranceArc';
import LobbyFloor from './components/LobbyFloor';
import GlassCase from './components/GlassCase';
import TrackLights from './components/TrackLights';
import MineralPlaque from './components/MineralPlaque';
import EntranceBanner from './components/EntranceBanner';


const App = () => {
  const [selectedMineral, setSelectedMineral] = useState(null)
  const [mode, setMode] = useState("home")
  const [showPointerMessage, setShowPointerMessage] = useState(true)
  const [nearbyMineral, setnearbyMineral] = useState(null)
  const [loadingMuseum, setLoadingMuseum] = useState(false);

  const positions = [
    [-8, 0, -5],
    [8, 0, -5],

    [-8, 0, -15],
    [8, 0, -15],

    [0, 0, -25]
  ];

  const columns = [
    [-20, 7.5, -10],
    [-20, 7.5, 10],

    [-10, 7.5, -10],
    [-10, 7.5, 10],

    [10, 7.5, -10],
    [10, 7.5, 10],

    [20, 7.5, -10],
    [20, 7.5, 10]
  ];
  const mineralData = minerals.map((mineral, index) => ({
    ...mineral,
    position: positions[index]
  }))

  const handleEnterMuseum = async () => {
    setLoadingMuseum(true);

    setTimeout(async () => {
      try {
        await document.documentElement.requestFullscreen();

        setMode("explore");
        window.scrollTo(0, 0);

        setShowPointerMessage(true);

        setTimeout(() => {
          setShowPointerMessage(false);
        }, 3000);

      } catch (err) {
        console.log(err);
      }

      setLoadingMuseum(false);
    }, 1000);
  };

  const handleExitMuseum = () => {
    document.exitPointerLock?.();

    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    setSelectedMineral(null);
    setnearbyMineral(null);

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

      <Canvas camera={{ position: [0, 6, 28], fov: 50 }}>
        <ambientLight intensity={0.15} />
        {/* <directionalLight
          castShadow
          position={[5, 10, 5]} intensity={1}
        /> */}
        {/* <pointLight
          position={[0, 8, 0]}
          intensity={30}
        /> */}

        {minerals.map((mineral, index) => {
          return (
            <Mineral
              key={mineral.id}
              position={[positions[index][0], 2.5, positions[index][2]]}
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
          positions.map((pos, index) => (
            <GlassCase
              key={index}
              position={[pos[0], 2, pos[2]]}
            />
          ))
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


        {
          positions.map((pos, index) => (
            <MuseumSpotlight
              key={index}
              position={[pos[0], 8, pos[2]]}
              target={[pos[0], 1, pos[2]]}
            />
          ))
        }


        {
          columns.map((pos, index) => (
            <Columns key={index}
              position={pos} />
          ))
        }


        {
          mode === "explore" &&
          nearbyMineral && (
            <MineralPlaque
              mineral={nearbyMineral}
              position={nearbyMineral.position}
            />
          )
        }




        <Floor />
        <MuseumWalls />

        <MuseumCeiling />
        <WelcomeBoard />

        <pointLight
          position={[0, 12, -10]}
          intensity={10}
          color="#fff6e5"
        />

        <spotLight
          position={[0, 10, 20]}
          intensity={25}
          angle={0.4}
          penumbra={1}
          color={"#ffe8b3"}
        />
        <EntranceBanner />
        <EntranceArch />
        <LobbyFloor />
        <TrackLights />
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
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50">
            <button
              className="px-8 py-4 bg-white rounded-xl text-lg font-semibold hover:scale-105 transition"
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
        loadingMuseum && (
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              LITHOS
            </h1>

            <p className="text-gray-400">
              Entering Museum...
            </p>
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
        (mode === "explore" || mode === "inspect") && (
          <button
            className="absolute top-5 left-5 z-50 bg-white/90 backdrop-blur px-4 py-2 rounded-lg hover:scale-105 transition"
            onClick={handleExitMuseum}
          >
            ← Return Home
          </button>
        )
      }








    </div>
  )
}

export default App