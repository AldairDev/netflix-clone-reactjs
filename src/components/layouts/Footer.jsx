import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-title">
            <a href="/">¿Preguntas? Contáctanos. </a>
          </div>
          <ul>
            <li>
              <a href="/">preguntas frecuentes</a>
            </li>
            <li>
              <a href="/">Centro de ayuda</a>
            </li>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li>
              <a href="/">Prensa</a>
            </li>
            <li>
              <a href="/">Relaciones con inversionistas</a>
            </li>
            <li>
              <a href="/">Empleo</a>
            </li>
            <li>
              <a href="/">Formas de ver</a>
            </li>
            <li>
              <a href="/">Términos de uso</a>
            </li>
            <li>
              <a href="/">Privacidad</a>
            </li>
            <li>
              <a href="/">Preferencia de cookies</a>
            </li>
            <li>
              <a href="/">Información corporativa</a>
            </li>
            <li>
              <a href="/">Contáctanos</a>
            </li>
            <li>
              <a href="/">Prueba de velocidad</a>
            </li>
            <li>
              <a href="/">Avisos legales</a>
            </li>
            <li>
              <a href="/">Originales de Netflix</a>
            </li>
          </ul>
          <div className="footer-select">
            <select name="lenguage">
              <option value="spanish">Español</option>
              <option value="english">Ingles</option>
            </select>
          </div>
          <p>Netflix Perú</p>
        </div>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  color: #757575;
  padding-top: 2rem;

  .footer-select::before{
      content: "";
      position: absolute;
      color: blue;
      font-size: 2rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }
  .footer-title > a {
    font-size: 1em;
    color: #757575;
    text-decoration: none;
  }
  .footer-title {
    padding-bottom: 1em;
  }
  li {
    width: 25%;
    padding: 0;
    margin-bottom: 1em;
  }
  li > a {
    font-size: 0.8em;
    text-decoration: none;
    color: #757575;
  }
  .footer-container {
    margin: 2.5rem auto;
    max-width: 55rem;
  }
  .footer-select select {
    width: 8rem;
    padding-left: 2rem;
    background: black;
    color: #999;
    border: 1px solid #333333;
    border-radius: 1px;
    height: 3.3em;
    font-size: 1em;
  }
  p{
      margin-top:2em;
      font-size: 0.85em;
  }
`;

export { Footer };
