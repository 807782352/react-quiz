import React from "react";
import Options from "../Options";

export default function Question({ question, dispatch, answer, index }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <Options index={index} question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
