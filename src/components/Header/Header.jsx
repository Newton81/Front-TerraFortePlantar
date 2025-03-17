"use client";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center self-center w-full text-base text-center text-green-800 max-w-[1400px] max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/7c81465b583c3119f457707d71f7eeeff435fa0c5d62d235db247432247e122c?placeholderIfAbsent=true"
        alt="TerraForte Plantar Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.24] w-[197px]"
      />
      <nav className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
        <a href="#quem-somos" className="self-stretch my-auto hover:underline">
          Quem somos
        </a>
        <a href="#servicos" className="self-stretch my-auto hover:underline">
          Serviços
        </a>
        <a href="#orcamentos" className="self-stretch my-auto hover:underline">
          Orçamentos
        </a>
        <a href="#contatos" className="self-stretch my-auto hover:underline">
          Contatos
        </a>
      </nav>
    </header>
  );
}

export default Header;
