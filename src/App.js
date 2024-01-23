import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/sidebar';
import CustomRouter from './customrouter';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Sidebar />
          <CustomRouter />
          <ToastContainer />
        </div>
      </Router>
    </ChakraProvider>
  );
};

export default App;
