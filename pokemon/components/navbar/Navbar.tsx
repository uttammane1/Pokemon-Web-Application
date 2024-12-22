import React from 'react'
import SearchBar from './SearchBar'
import PokemonTypeFilter from './PokemonTypeFilter'
import {data } from "@/utils/data"
import Image from 'next/image'
import LogoImage from '@/resources/images/pokemon-logo-png.png'

const Navbar = () => {

    const Ptypes = [...new Set(data.map(item => item.type))];

  return (
    <div className='flex flex-row justify-around py-2 shadow-lg bg-sky-300' style={{width:'100%'}} >
        <Image src={LogoImage} alt='logo' width={120}/>
        <SearchBar/>
        <PokemonTypeFilter availableTypes={Ptypes}/>
    </div>
  )
}

export default Navbar
