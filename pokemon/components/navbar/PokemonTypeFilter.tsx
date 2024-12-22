"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { filterByType } from "@/lib/features/search/searchSlice";  

interface PokemonTypeFilterProps {
  availableTypes: string[];
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({ availableTypes }) => {
  const dispatch = useDispatch();

  const handleSelectedType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    dispatch(filterByType(event.target.value));
  };

  return (
    <div className="h-4 border rounded-md my-3  ">
      <select defaultValue="all" onChange={handleSelectedType}>
        <option value="all">All</option>
        {availableTypes.map((el, index) => (
          <option key={index} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeFilter;
