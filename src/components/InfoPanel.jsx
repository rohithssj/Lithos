import React from 'react'

const InfoPanel = ({ mineral, setSelectedMineral, setMode }) => {
  return (
    <div
      className="
      absolute
      inset-0
      bg-black/60
      backdrop-blur-sm
      flex
      justify-center
      items-center
      z-[100]
      "
    >
      <div
        className="
        bg-neutral-900/95 border border-yellow-500/30 backdrop-blur-md rounded-2xl shadow-2xl w-[500px] p-8 relative">
        <h2 className='text-3xl font-bold mb-4 text-yellow-300 tracking-wider uppercase'>
          {mineral.name}
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="bg-black/30 p-3 rounded-lg">
            <p className="text-xs text-gray-400 uppercase">
              Formula
            </p>
            <p className="text-white font-semibold">
              {mineral.formula}
            </p>
          </div>

          <div className="bg-black/30 p-3 rounded-lg">
            <p className="text-xs text-gray-400 uppercase">
              Hardness
            </p>
            <p className="text-white font-semibold">
              {mineral.hardness}
            </p>
          </div>

        </div>

        <div className="h-px bg-yellow-500/20 my-4" />

        <p className='text-neutral-300'>
          {mineral.description}
        </p>

        <button
          onClick={() => {
            setSelectedMineral(null)
            setMode("explore")
          }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10  text-xl font-bold hover:bg-white/20 transition"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default InfoPanel