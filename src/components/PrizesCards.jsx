import React from 'react'

const PrizesCards = ({ background, title, description }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center gap-10 px-10 py-9 rounded-md shadow-lg"
    >
      <h3 className="text-3xl text-center text-[#E6E6E6]">{title}</h3>
      <p className="text-center text-lg max-w-[500px] text-[#E6E6E6]">{description}</p>
    </div>
  )
}

export default PrizesCards