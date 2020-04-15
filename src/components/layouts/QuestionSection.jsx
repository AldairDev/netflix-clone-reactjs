import React, { useState } from "react";
import styled from "styled-components";

const QuestionSection = ({ data }) => {
  const [showAnwser, setShowAnwser] = useState(false);

  const showAnswerDiv = () => {
    setShowAnwser(!showAnwser);
  };
  return (
    <WraperQuestion>
      <h1>Preguntas Frecuentes </h1>
      <ul>
        {data.map((question, i) => (
          <li key={i}>
            <button onClick={showAnswerDiv}>{question.title}</button>
            {showAnwser===true && <div className="question-description">{question.description}</div>}
          </li>
        ))}
      </ul>
    </WraperQuestion>
  );
};

const WraperQuestion = styled.div`
  text-align: center;
  color: white;
  box-sizing: border-box;
  position: relative;
  padding: 70px 45px;

  h1 {
    font-size: 3rem;
  }
  li {
    margin: 0 30rem;
    background-color: black;
    list-style: none;
  }
  ul {
    padding-top: 3rem;
    margin: 0 auto;
  }
  button {
    font-size: 1.6rem;
    text-align: left;
    padding-left: 2rem;
    color: white;
    border: none;
    background-color: #303030;
    width: 100%;
    margin-bottom: 2px;
    height: 4.4rem;
  }
  button:hover {
    background-color: red;
  }

  .question-description {
    background-color: #303030;
    padding: 1.3rem 2rem;
    font-size: 1.6rem;
    text-align: left;
    max-height: 1200px;
    margin-bottom: 2px;
  }
`;

export { QuestionSection };
