import React from 'react'

const Card = ({title, img, hidden}) => {
  return (
    <div className={`w-28 h-24 md:h-48 md:w-40 lg:w-52 lg:h-48 xl:w-56 xl:h-52 bg-gradient-to-r from-sky-950/30 to-zinc-200-500/30 rounded-md backdrop-blur-md cursor-pointer ${hidden ? 'hidden' : ''}`}>
        <h1 className='lang-title'>{title}</h1>
        <div className="w-1/2 h-1/2 m-auto">
            <img 
                className='w-full h-full hover:drop-shadow-2xl' 
                src={img} 
                alt={`image for ${title}`}
            />
            </div>
    </div>
  )
}

export default Card