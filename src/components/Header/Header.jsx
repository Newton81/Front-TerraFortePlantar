"use client";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center self-center w-full text-base text-center text-green-800 max-w-[1400px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/7c81465b583c3119f457707d71f7eeeff435fa0c5d62d235db247432247e122c?placeholderIfAbsent=true"
        alt="TerraForte Plantar Logo"
      />
      <nav>
        <a href="#quem-somos">
          Quem somos
        </a>
        <a href="#servicos">
          Serviços
        </a>
        <a href="#orcamentos">
          Orçamentos
        </a>
        <a href="#contatos">
          Contatos
        </a>
      </nav>
    </header>
  );
}

export default Header;
