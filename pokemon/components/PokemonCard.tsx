import Image from 'next/image';
import React from 'react'

interface PokemonCard{
  name:string;
  id:number;
  image:any;
  type:string;

}

const PokemonCard:React.FC<PokemonCard> = ({name,id,image, type}) => {
  return (
    <div className=' w-40 h-70 border-2  text-center shadow-2xl font-medium rounded-lg '>
       <Image src={image} alt='pokemon' width={150} height={200}/>
      <h1 className='font-bold p-2'> {name}</h1>
      <h2 >id: {id}</h2>
       <h3>{type}</h3>
      
       
    </div>
  )
}

export default PokemonCard
