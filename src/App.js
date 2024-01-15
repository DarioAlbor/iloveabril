import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Inicio from './pages/inicio';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Inicio />
        <ToastContainer />
      </div>
    </ChakraProvider>
  );
};

export default App;
