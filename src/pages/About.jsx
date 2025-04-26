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

function About() {
  return (
    <Container>
      <h1>Quién somos</h1>
      <p>
        AU INVEST nació con la visión de democratizar la inversión en oro, facilitando el acceso al mercado profesional a inversores privados de todo el mundo. Antes de nuestra creación, los compradores minoristas, se enfrentaban a obstáculos como el acceso limitado a los mejores precios y a la custodia profesional.
      </p>
      <p>
        Fundada en 2018, AU INVEST se ha convertido en la plataforma de inversión en oro online más grande del mundo, custodiando alrededor de 967 toneladas en oro y efectivo de más de 25 mil usuarios.
      </p>
      <p>
        Estamos participados por empresas líderes en el sector financiero como Belize FSC. Somos miembro oficial de la London Bullion Market Association (LBMA), la asociación de profesionales más importante del mercado del oro físico a nivel mundial. Nuestra pertenencia a la LBMA subraya nuestro compromiso con los estándares de conducta comercial más elevados.
      </p>
      <h3>Nuestros Logros</h3>
      <ul>
        <li>Galardonados con el Queen's Award for Enterprise en 2021.</li>
        <li>Elegidos Mejor Bróker de Oro en los MoneyWeek Readers Choice Awards.</li>
      </ul>
      <h3>Nuestra Misión</h3>
      <p>
        Ofrecer una plataforma transparente, segura y de bajo coste para que cualquier persona pueda invertir en metales preciosos físicos. Proporcionar herramientas y recursos educativos para ayudar a nuestros clientes a tomar decisiones informadas sobre sus inversiones.
      </p>
      <h3>Nuestros Valores</h3>
      <ul>
        <li><strong>Seguridad:</strong> La protección de los activos de nuestros clientes es nuestra máxima prioridad.</li>
        <li><strong>Transparencia:</strong> Ofrecemos información clara y detallada sobre nuestros precios, comisiones y procesos.</li>
        <li><strong>Integridad:</strong> Nos comprometemos a operar con los más altos estándares éticos.</li>
        <li><strong>Accesibilidad:</strong> Creemos que la inversión en metales preciosos debe estar al alcance de todos.</li>
      </ul>
    </Container>
  );
}

export default About;