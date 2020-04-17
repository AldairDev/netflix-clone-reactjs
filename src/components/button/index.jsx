import React from "react";
import styled from "styled-components";
import arrow from "../../assets/svg/right.svg";
const Index = ({ height, width, text, textSize }) => {
  return (
    <Button height={height} width={width} textSize={textSize}>
      <button>
        <span>{text}</span>
        <span>
          <img src={arrow} alt="arrow" width="40px" height="20px" />
        </span>
      </button>
    </Button>
  );
};

const Button = styled.div`
  background: #e50914;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e50914;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border: none;
    border-radius: 0 3px 3px 0;
    color: white;
    font-size: ${(props) => props.textSize};
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;  
  }
  Button:hover {
    background: #fb1823;
  }
`;

export { Index };
