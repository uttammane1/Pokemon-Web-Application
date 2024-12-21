import React, { useEffect, useState } from 'react';
import { Grid, Spinner, Center } from '@chakra-ui/react';
import PokemonCard from './PokemonCard';
import { fetchPokemon } from '../utils/api';

const PokedexGrid = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch (error) {
        console.error('Failed to fetch Pokemon:', error);
      } finally {
        setLoading(false);
      }
    };
    getPokemon();
  }, []);

  if (loading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="6">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </Grid>
  );
};

export default PokedexGrid;
