import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Inicio from './pages/inicio';
import Musica from './pages/musica';
import Invitaciones from './pages/invitaciones';
import InvitacionPanchos from './pages/invitaciones/panchitos'

const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="musica" element={<Musica />} />
      <Route path="invitaciones" element={<Invitaciones />} />
      <Route path="invitaciones/panchitos" element={<InvitacionPanchos />} />
    </Routes>
  );
};

export default CustomRouter;
