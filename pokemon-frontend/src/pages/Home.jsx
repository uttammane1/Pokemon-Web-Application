import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import PokedexGrid from '../components/PokedexGrid';

const Home = () => {
  return (
    <Box p="4">
      <Heading as="h1" size="xl" textAlign="center" mb="6">
        Pokemon Explorer
      </Heading>
      <PokedexGrid />
    </Box>
  );
};

export default Home;
