import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Inicio from './pages/inicio';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <ChakraProvider>
      <div>
        <Sidebar />
        <Inicio />
        <ToastContainer />
      </div>
    </ChakraProvider>
  );
};

export default App;
