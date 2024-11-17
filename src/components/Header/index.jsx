import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Importe os ícones do react-icons
import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-brand">Galleria</Link>
      <nav className="header-navbar">
        <ul>
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li>
            <Link to="/fotos">Fotos</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="header-social-media">
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
