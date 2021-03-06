import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Index as FormInput } from "../form-input/Index";

import IconClose from "../../assets/svg/cross-out.svg";

const QuestionSection = ({ data }) => {
  const [showAnwser, setShowAnwser] = useState([]);
  // const [prueba, setPrueba] = useState(true)
  useEffect(() => {
    setShowAnwser(data);
  }, [data]);

  const openAnswer = (index) => {
    setShowAnwser(
      showAnwser.map((i) =>
        i.id === index ? { ...i, visibility: !i.visibility } : i
      )
    );
  };
  console.log(showAnwser);

  return (
    <WraperQuestion>
      <h1>Preguntas Frecuentes </h1>
      <ul>
        {showAnwser.map((question, i) => (
          <li key={i}>
            <div>
              <button className="button-question" onClick={() => openAnswer(i)}>
                {question.title}
                {question.visibility === true ? (
                  <img src={IconClose} alt="iconClose" className="close-icon" />
                ) : (
                  <img src={IconClose} alt="iconClose" className="open-icon" />
                )}
              </button>
            </div>
            {question.visibility === true && (
              <div className="question-description">{question.description}</div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <ul>
          <div className="form-input">
            <FormInput />
          </div>
          <h4>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta de
            Netflix o acceder a la tuya.
          </h4>
        </ul>
      </div>
    </WraperQuestion>
  );
};

const WraperQuestion = styled.div`
  text-align: center;
  color: white;
  box-sizing: border-box;
  position: relative;
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  h1 {
    font-size: 3rem;
  }
  li {
    margin: 0.5rem auto;
    background-color: black;
    width: 815px;
  }
  ul {
    padding-top: 3rem;
    margin: 0 auto;
  }
  .form-input {
    display: flex;
    justify-content: center;
    margin-top: -1.2rem;
  }
  .close-icon{
    max-height: 0.70em;
    position: absolute;
    right: 1.5em;
    transform: translateX(50%) rotate(-90deg);
    transition: 0.2s;
    bottom: 37%;
  }
  .open-icon{
    max-height: 0.70em;
    position: absolute;
    margin: auto 0;
    bottom: 37%;
    right: 1.5em;
    transition: 0.2s;
    transform: translateX(50%) rotate(45deg);

  }

  .button-question {
    position: relative;
    text-decoration: none;
    font-size: 1.6rem;
    text-align: left;
    padding-left: 2rem;
    color: white;
    border: 1px #303030;
    background-color: #303030;
    width: 100%;
    outline: none;
    margin-bottom: 2px;
    height: 4.4rem;
    cursor: pointer;
    transition: 3s;
  }

  .question-description {
    background-color: #303030;
    padding: 1.3rem 2rem;
    font-size: 1.6rem;
    text-align: left;
    max-height: 1200px;
    margin-bottom: 2px;
    transition: 1s;
  }
`;

export { QuestionSection };
