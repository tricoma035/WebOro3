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

const Question = styled.h3`
  margin-top: 1.5rem;
  color: #1a2236;
`;

function FAQ() {
  return (
    <Container>
      <h1>Preguntas Frecuentes (FAQ)</h1>
      <Question>¿Qué hace que Au Invest sea una opción más segura que otras formas de inversión en oro?</Question>
      <p>
        Au Invest permite poseer oro físico real sin complicaciones de auto custodia, almacenándolo en condiciones seguras y operando con criptomonedas para garantizar la privacidad.
      </p>
      <Question>¿Cómo se compara la inversión en oro físico a través de Au Invest con las inversiones tradicionales?</Question>
      <p>
        A diferencia de las inversiones tradicionales, Au Invest elimina los desafíos de la gestión física y la supervisión de la seguridad, garantizando que el oro esté almacenado de manera segura y accesible. Además, el uso de criptomonedas permite transacciones rápidas y con mayor privacidad, lo que no es posible con métodos tradicionales.
      </p>
      <Question>¿Qué sucede con la privacidad de mis transacciones al invertir con Au Invest?</Question>
      <p>
        Al utilizar tecnología blockchain y criptomonedas, Au Invest asegura un alto nivel de privacidad, minimizando la exposición de tus datos personales y fiscales. Esto proporciona un grado de anonimato que otros métodos de inversión no pueden ofrecer.
      </p>
      <Question>¿Existen beneficios fiscales al invertir en oro físico con Au Invest?</Question>
      <p>
        Sí, al operar con criptomonedas y mantener tus transacciones en un entorno descentralizado, puedes disfrutar de un marco fiscal más flexible y menos intrusivo. Esto te permite reducir la exposición a impuestos sobre incrementos patrimoniales y mantener la confidencialidad de tu inversión.
      </p>
      <Question>¿Cómo se gestiona la liquidez de mi inversión en oro físico?</Question>
      <p>
        Con Au Invest, puedes liquidar tu inversión después de un periodo de carencia de 12 meses. Este tiempo asegura que tu inversión tenga la oportunidad de apreciarse y maximizar su valor antes de que decidas retirarlo. Durante este periodo, no podrás retirar tu oro, pero este enfoque busca estabilizar tu inversión frente a las fluctuaciones del mercado.
      </p>
      <Question>¿Por qué debería elegir Au Invest frente a otras opciones de inversión con criptomonedas?</Question>
      <p>
        Au Invest no solo te permite aprovechar la tecnología de criptomonedas, sino que la vincula con el oro físico, creando una sinergia entre activos digitales y tangibles. Esta combinación ofrece la seguridad y estabilidad del oro junto con la flexibilidad y privacidad de las criptomonedas, permitiéndote beneficiarte de la apreciación del oro a largo plazo sin los riesgos de la volatilidad inmediata.
      </p>
      <Question>¿Cómo puedo estar seguro de que el oro está realmente respaldando mi inversión?</Question>
      <p>
        Au Invest implementa procedimientos rigurosos de verificación para asegurar que el oro almacenado en las cámaras de seguridad esté debidamente registrado y respaldado por la cantidad de inversión que has realizado. Gracias a la tecnología blockchain, todas las transacciones relacionadas con tu inversión son rastreables, proporcionando transparencia y seguridad adicionales.
      </p>
      <Question>¿Cuál es el impacto de las fluctuaciones del precio del oro en mi inversión?</Question>
      <p>
        El precio del oro es volátil, como cualquier activo, pero históricamente se ha considerado un refugio seguro en tiempos de incertidumbre económica. Invertir a través de Au Invest te da acceso a la propiedad directa de oro físico, lo que te permite beneficiarte del valor subyacente a largo plazo sin los riesgos de las fluctuaciones en los mercados financieros.
      </p>
      <Question>¿Puedo diversificar mi inversión dentro de Au Invest más allá del oro físico?</Question>
      <p>
        Actualmente, el enfoque de Au Invest se centra en el oro físico como una forma segura y estable de inversión. Aunque la diversificación con otros activos podría ser atractiva, el modelo de Au Invest está diseñado para maximizar la seguridad y el valor a largo plazo de la inversión en oro.
      </p>
      <Question>¿Cómo afecta la utilización de criptomonedas al costo de las transacciones en Au Invest?</Question>
      <p>
        El uso de criptomonedas como medio para invertir en oro físico reduce costos asociados con intermediarios tradicionales, como bancos y plataformas financieras. Las transacciones son más rápidas y seguras, y aunque existen costos computacionales asociados (Gas Fee), Au Invest emplea las redes más eficientes para mantener estos costos al mínimo, permitiéndote maximizar tu inversión al reducir el impacto de las tarifas transaccionales.
      </p>
    </Container>
  );
}

export default FAQ;