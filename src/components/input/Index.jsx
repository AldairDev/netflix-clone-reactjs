import React from "react";
import styled from "styled-components";

const Index = ({ width, height }) => {
  return (
    <InputWrapper  width={width} height={height} >
      <input type="text" required />
      <label htmlFor="Email">Email</label>
    </InputWrapper>
  );
};


const InputWrapper = styled.div`

  position: relative;

  input {
    background: #ffffff;
    border: 1px solid #8c8c8c;
    border-radius: 3px 0 0 3px;
    min-width: ${(props) => props.width};
    height: ${({ height }) => height};
    margin: 0;
    padding-left: 0.8rem;
    font-size: 1rem;
  }
  label {
    color: #8c8c8c;
    position: absolute;
    top: 40%;
    left: 0.8rem;
    pointer-events: none;
    transition: .2s;
  }
  input:focus ~ label,
  input:valid ~ label
  {
    top: 10%;
    font-size: 0.75rem;
  }

`;

export default Index;
