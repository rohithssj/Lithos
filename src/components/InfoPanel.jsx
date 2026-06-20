import React from 'react'

const InfoPanel = ({ mineral, setSelectedMineral }) => {

  return (
    <div className="absolute top-5 right-5 p-4 rounded-lg w-80 bg-white">

      <h2 className='text-xl font-bold mb-2'>
        {mineral.name}
        </h2>

      <p>
        <strong>Formula : </strong> {mineral.formula}
      </p>
      <p><strong>Hardness : </strong> {mineral.hardness}</p>

      <p>{mineral.description}</p>
      <button onClick={() => {
        setSelectedMineral(null)
      }} className='absolute top-2 right-2'>
        X
      </button>
    </div>
  )
}

export default InfoPanel