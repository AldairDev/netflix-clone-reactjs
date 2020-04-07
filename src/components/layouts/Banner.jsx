import React from "react";
import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

const Banner = ({ children }) => {
  return (
    <Background bg={bg}>
      {children}
    </Background>
  );
};

export default Banner;

const Background = styled.div`
  position: relative;
  background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bg});
  min-height: 90vh;
`;
