import React from "react";
import Logo from "../../assets/svg/logo.svg";
import Banner from './Banner'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Banner>
        <HeaderComponent >
          <Image src={Logo} />
          <Link to="/" className="button">
            Inciar sesión
          </Link>
        </HeaderComponent>
      </Banner>
  );
};

const HeaderComponent = styled.div`

  .button {
    translate: transform(-50% -50%);
    text-decoration: none;
    background-color: #e50914;
    margin: 1.9rem 2.6rem;
    padding: 7px 17px;
    right: 0;
    border-radius: 3px;
    color: white;
    line-height: normal;
    border: none;
    font-weight: 400;
    font-size: 1rem;
    position: absolute;
  }
`;

const Image = styled.img`
  src: url(${props => props.src});
  width: 200px;
  max-height: 45px;
  margin: 1.9rem 2.6rem;
  left: 0;
  position: absolute;
`;

export { Header };
