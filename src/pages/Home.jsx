import React from "react";
import styled from "styled-components";
import GoldChart from "../components/GoldChart";

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(26,34,54,0.07);
`;

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: #ffd700;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #1a2236;
  margin-bottom: 1.5rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Advantages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const Advantage = styled.div`
  flex: 1 1 220px;
  background: #f7f7fa;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(26,34,54,0.04);
`;

const CTA = styled.div`
  margin: 2rem 0 0 0;
  text-align: center;
`;

const CTAButton = styled.a`
  background: #ffd700;
  color: #1a2236;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: #fff3b0;
  }
`;

function Home() {
  return (
    <Container>
      <Title>AU INVEST</Title>
      <Subtitle>Tu oro, tu privacidad, tu futuro.</Subtitle>
      <Section>
        <p>
          Invertir en oro físico nunca fue tan fácil, seguro y privado. Realiza tu inversión a través de la red blockchain y asegúrate de que tu oro esté guardado en nuestra cámara de seguridad privada, sin comprometer tu privacidad fiscal ni física.
        </p>
      </Section>
      <Section>
        <h3>Contexto del Mercado</h3>
        <p>
          En las últimas dos décadas, el precio de compra y alquiler de viviendas ha mostrado una tendencia a la baja en términos reales, a pesar del aumento en dólares. Esto se debe a la devaluación del dinero y la disparidad con el valor del oro, un refugio histórico. Invertir en oro ha demostrado ser más rentable que en acciones o bonos, especialmente en un contexto de devaluación monetaria.
        </p>
        <p>
          Au Invest ofrece a los inversores la oportunidad de beneficiarse de esta tendencia, asegurando que su inversión en oro físico no esté sujeta a los riesgos de los mercados financieros tradicionales.
        </p>
      </Section>
      <Section>
        <h3>Ventajas Competitivas</h3>
        <Advantages>
          <Advantage>
            <strong>Inversión Privada y Segura</strong><br />
            Propiedad de oro físico 100% respaldado, almacenado en instalaciones de alta seguridad, garantizando la confidencialidad de la inversión.
          </Advantage>
          <Advantage>
            <strong>Uso de Criptomonedas</strong><br />
            Transacciones rápidas y discretas, respetando la privacidad fiscal y minimizando la exposición de datos personales.
          </Advantage>
          <Advantage>
            <strong>Almacenamiento Seguro</strong><br />
            Oro almacenado en cámaras de seguridad de última generación, supervisadas 24/7, eliminando riesgos de pérdida o robo.
          </Advantage>
          <Advantage>
            <strong>Sin Riesgos Fiscales</strong><br />
            Operar con criptomonedas permite un entorno fiscal más flexible, protegiendo la confidencialidad de la inversión.
          </Advantage>
        </Advantages>
      </Section>
      <Section>
        <h3>Sobre Nosotros</h3>
        <p>
          Au Invest nace de la necesidad de ofrecer una solución moderna y segura para la inversión en metales preciosos. Nuestra misión es proporcionar a los inversores una plataforma que combine la seguridad del oro físico con la flexibilidad y privacidad de las criptomonedas. Creemos en la importancia de la confianza y la transparencia, y hemos diseñado nuestra plataforma para que sea intuitiva y accesible.
        </p>
      </Section>
      <CTA>
        <CTAButton href="/registro">Comienza a Proteger tu Futuro Hoy Mismo</CTAButton>
        <p>Regístrate ahora y empieza a invertir de forma privada y segura en oro físico.</p>
      </CTA>
      <Section>
        <h3>Precio del Oro</h3>
        <GoldChart />
      </Section>
    </Container>
  );
}

export default Home;