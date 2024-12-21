import React from 'react';
import { CheckboxGroup, Stack, Checkbox } from '@chakra-ui/react';

const PokemonTypeFilter = ({ types, selectedTypes, onChange }) => {
  return (
    <CheckboxGroup value={selectedTypes} onChange={onChange}>
      <Stack direction="row" wrap="wrap">
        {types.map((type) => (
          <Checkbox key={type} value={type} mr="4" mb="2">
            {type}
          </Checkbox>
        ))}
      </Stack>
    </CheckboxGroup>
  );
};

export default PokemonTypeFilter;
