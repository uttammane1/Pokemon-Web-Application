"use client"

import React from 'react'
import PokemonCard from './PokemonCard'
import {data} from "@/utils/data"
import Navbar from './navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store'; 




const PokedexGrid = () => {
    const filteredData = useSelector((state: RootState) => state.search.filteredData);
  return (
    <div style={{width:'100% ' }} >
        <Navbar/>
      
    <div className=" grid grid-cols-2 gap-y-5 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5  mt-5 "
          style={{width:'75% ', margin:'auto',marginTop:'20px', marginLeft:'8' }} >
     {filteredData?.map((ele:any)=>(
        
        <PokemonCard name={ele.name} id={ele.id} image={ele.image}
          key={ele.id} type={ele.type} />
     ))}
     
    </div>
      
   </div>
  )
}

export default PokedexGrid
