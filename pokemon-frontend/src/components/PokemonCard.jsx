import React from 'react';
import { Box, Image, Badge, Text } from '@chakra-ui/react';

const PokemonCard = ({ id, name, types, sprite }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      textAlign="center"
      boxShadow="md"
    >
      <Image src={sprite} alt={name} boxSize="150px" mx="auto" />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="xl">
          {name} (#{id})
        </Text>
        <Box mt="2">
          {types.map((type) => (
            <Badge key={type} colorScheme="teal" mr="1">
              {type}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonCard;
