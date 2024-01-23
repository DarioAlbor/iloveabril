import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

function Criticar() {
  const enviarCorreo = () => {
    // EmailJS
    const serviceId = 'service_k3zstch';
    const templateId = 'template_rmq17lm';  
    const userId = 'zMxpedZNfXDXH3sr3';  

    const templateParams = {};

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Correo enviado con éxito:', response);

        mostrarToast();
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);

        mostrarToast();
      });
  };

  const mostrarToast = () => {
    toast.error('Vos sos una mierda pelotuda', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>

      <ToastContainer />
      {enviarCorreo()}
    </div>
  );
}

export default Criticar;
