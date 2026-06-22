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
        bg-white w-[500px] p-8 rounded-2xl shadow-2xl relative">
        <h2 className='text-3xl font-bold mb-4'>
          {mineral.name}
        </h2>

        <p className='mb-2'>
          <strong>Formula:</strong> {mineral.formula}
        </p>

        <p className='mb-4'>
          <strong>Hardness:</strong> {mineral.hardness}
        </p>

        <p className='text-gray-700'>
          {mineral.description}
        </p>

        <button
          onClick={() => {
            setSelectedMineral(null)
            setMode("explore")
          }}
          className="absolute top-4 right-4 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default InfoPanel