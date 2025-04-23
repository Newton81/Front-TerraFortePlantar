"use client";
import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="quem-somos" className="sobre-nos-section">
      <div className="container">
        <h2>Quem Somos</h2>
        <p>
          A <strong>TerraForte Plantar</strong> é uma empresa especializada em <strong>Consultorias e Assessorias Ambientais, Agronômicas e Florestais</strong>.
          Atuamos com excelência no desenvolvimento e execução de projetos voltados para questões ambientais, sempre promovendo o equilíbrio entre
          <strong> desenvolvimento e sustentabilidade</strong>.
        </p>
        <p>
          Nosso time conta com uma visão estratégica e técnica, oferecendo <strong>soluções personalizadas</strong> que atendem às necessidades específicas de cada cliente.
        </p>
        <p>
          Estamos presentes em diversos segmentos, como <strong>propriedades rurais, empreendimentos imobiliários, indústria</strong> e <strong>infraestrutura</strong>.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;