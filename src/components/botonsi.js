import React, { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';  // Asegúrate de importar emailjs-com en lugar de emailjs

const BotonSi = ({ onSiClick }) => {
  const botonSiRef = useRef(null);

  const handleSiClick = () => {
    // Lógica o acciones que deseas realizar al presionar "Sí"
    onSiClick();

    // Mostrar notificación con react-toastify
    toast.success('Agenda 🌭 para el Jueves 📅', {
      position: 'top-right',
      autoClose: 5000, // Cerrar automáticamente después de 5 segundos
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Configura tu servicio, plantilla y usuario de EmailJS
    const serviceId = 'service_k3zstch';
    const templateId = 'template_8emxd4m';
    const userId = 'zMxpedZNfXDXH3sr3';  // Utiliza tu public_key en lugar de user_id

    // Parámetros del correo (puedes dejarlo vacío si ya has configurado los parámetros en la plantilla)
    const templateParams = {};

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  };

  return (
    <Button colorScheme="teal" onClick={handleSiClick} ref={botonSiRef}>
      Sí
    </Button>
  );
};

export default BotonSi;
