import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerColumn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/70daba6d1b9c4a9e945dc28772db04f5/7c81465b583c3119f457707d71f7eeeff435fa0c5d62d235db247432247e122c?placeholderIfAbsent=true"
              alt="TerraForte Plantar Logo"
              className="footerLogo"
            />
            <p className="footerDescription">
              TerraForte Plantar is committed to sustainable forestry practices and environmental conservation.
            </p>
          </div>
          <div className="footerColumn">
            <h3 className="footerTitle">Quick Links</h3>
            <ul className="footerLinks">
              <li className="footerLink"><a href="#quem-somos">Quem somos</a></li>
              <li className="footerLink"><a href="#servicos">Serviços</a></li>
              <li className="footerLink"><a href="#orcamentos">Orçamentos</a></li>
              <li className="footerLink"><a href="#contatos">Contatos</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <h3 className="footerTitle">Follow Us</h3>
            <div className="socialLinks">
              <a href="#" className="socialIcon">FB</a>
              <a href="#" className="socialIcon">TW</a>
              <a href="#" className="socialIcon">IG</a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p className="copyright">© 2025 TerraForte Plantar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;