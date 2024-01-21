import React from 'react';
import Encuesta from '../../components/encuesta';

const Inicio = () => {
  const handleNoClick = () => {
    console.log('No se quieren panchitos :(');
  };

  return (
    <div>
      <Encuesta onNoClick={handleNoClick} />
    </div>
  );
};

export default Inicio;
