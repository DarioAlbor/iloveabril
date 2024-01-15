import React, { useState, useEffect } from 'react';
import { Box, Center, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BotonSi from './botonsi';
import styled from 'styled-components';

const GlowingText = styled.span`
  font-size: xl;
  text-align: center;
  position: relative;
  z-index: 1;
  color: ${({ textColor }) => textColor};
  display: inline-block;
  position: relative;
`;

const HeartContainer = styled.div`
  position: absolute;
  top: -50%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const Encuesta = () => {
  const [posicion, setPosicion] = useState({ x: 720, y: 40 });
  const [botonNoPresionado, setBotonNoPresionado] = useState(true);
  const [textColor, setTextColor] = useState('#ffc5c5'); // Color inicial

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar el color del texto cada segundo
      const colors = ['#ffc5c5', '#f9ecd5', '#f8c9c5', '#dbe5e5', '#f4e1d2']; // Colores pasteles
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setTextColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleMouseEnter = () => {
    if (botonNoPresionado) {
      const nuevaPosicion = {
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 50),
      };
      setPosicion(nuevaPosicion);
    }
  };

  const handleMouseLeave = () => {
    if (botonNoPresionado) {
      // No restaurar la posición al alejar el mouse, para que permanezca en la última posición aleatoria
    }
  };

  const handleNoClick = () => {
    setBotonNoPresionado(false);
  };

  const handleSiClick = () => {
    console.log('¡Sí fue presionado!');
  };

  return (
    <Box mt={10}>
      <Center>
        <GlowingText textColor={textColor}>
          Vamos a comer panchitos?
          <HeartContainer>
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  left: index * 20,
                  top: -20,
                }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ❤️
              </motion.div>
            ))}
          </HeartContainer>
        </GlowingText>
      </Center>
      <Center mt={4}>
        <BotonSi onSiClick={handleSiClick} />
        <motion.div
          style={{
            position: 'absolute',
            left: posicion.x,
            top: posicion.y,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button colorScheme="red" onClick={handleNoClick} disabled={!botonNoPresionado}>
            No
          </Button>
        </motion.div>
      </Center>
    </Box>
  );
};

export default Encuesta;
