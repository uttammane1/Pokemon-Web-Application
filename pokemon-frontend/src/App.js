import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Home from './pages/Home';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" minH="100vh">
        <Container maxW="container.lg">
          <Home />
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;
