"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/7c81465b583c3119f457707d71f7eeeff435fa0c5d62d235db247432247e122c?placeholderIfAbsent=true"
        alt="TerraForte Plantar Logo"
      />
      <nav className="flex items-center gap-4">
        <a href="#quem-somos">Quem somos</a>
        <a href="#servicos">O que fazemos</a>
        <a href="#orcamentos">Serviços</a>
        <a href="#contatos">Contatos</a>
        <a
          href="https://wa.me/5511912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Fale Conosco
        </a>
      </nav>
    </header>
  );
}

export default Header;
