import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,34,54,0.07);
`;

function HowItWorks() {
  return (
    <Container>
      <h1>Cómo funciona</h1>
      <ul>
        <li>
          <strong>Realiza Tu Inversión:</strong> Usa criptomonedas para comprar oro físico de forma rápida y segura. No necesitas intermediarios ni bancos.
        </li>
        <li>
          <strong>Confirmación Inmediata:</strong> Una vez realizada la transacción, recibirás una confirmación de tu compra y la cantidad exacta de oro adquirido dependiendo del precio diario del oro.
        </li>
        <li>
          <strong>Almacenamiento Seguro:</strong> Tu oro será depositado en nuestra cámara de seguridad privada, donde estará a salvo de cualquier amenaza externa y con un seguro que cubre hasta catástrofes naturales y ataques terroristas.
        </li>
        <li>
          <strong>Acceso Transparente:</strong> Consulta el estado de tu inversión en cualquier momento a través de tu cuenta en nuestra plataforma. Todo con total transparencia.
        </li>
      </ul>
      <h3>Beneficios de Invertir con Nosotros</h3>
      <ul>
        <li>
          <strong>Privacidad Total:</strong> Utiliza criptomonedas para mantener la privacidad de tus transacciones, evitando la exposición a regulaciones fiscales no deseadas.
        </li>
        <li>
          <strong>Oro Físico Respaldado:</strong> Tu inversión está respaldada 100% por oro físico almacenado en una instalación con tecnología de punta.
        </li>
        <li>
          <strong>Accesibilidad Global:</strong> Puedes realizar tu inversión desde cualquier parte del mundo, sin importar tu ubicación.
        </li>
        <li>
          <strong>Seguridad Garantizada:</strong> Nuestras cámaras de seguridad cuentan con los más altos estándares de protección, asegurando que tu oro esté completamente resguardado.
        </li>
      </ul>
    </Container>
  );
}

export default HowItWorks;