import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";
// import { Index as Button } from "../button";
// import Input from "../input/Index";
import {Index as FormInput} from '../form-input/Index'
const Banner = ({ children }) => {
  return (
    <>
      <Background bg={bg}>
        {children}
        <div className="hero">
          <h1>Programas y películas sin límite y mucho más.</h1>
          <p>Disfruta donde quieras. Cancela en cualquier momento.</p>
          <FormInput />
          {/* <div className="email-form">
            <Input width="450px" height="61.4px" />
            <Button
              height="65px"
              width="330px"
              text="PROBAR AHORA"
              textSize={"1.8rem"}
            />
          </div> */}
          <h4>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta de
            Netflix o acceder a la tuya.
          </h4>
        </div>
      </Background>
    </>
  );
};

export default Banner;

const Background = styled.div`
  position: relative;
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${({ bg }) => bg});
  min-height: 85vh;
  border-bottom: 8px solid #222;
  
  h1 {
    font-size: 3.8rem;
    padding: 1rem 11rem;
  }
  p {
    margin: 0;
    max-width: 30vw;
    font-size: 1.6rem;
  }
  .hero {
    text-align: center;
    max-width: 950px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 3.1rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
  }
`;
