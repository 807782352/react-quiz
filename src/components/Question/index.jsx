import React from "react";
import Options from "../Options";
import { useQuizs } from "../../context/QuizContext";

export default function Question() {
  const { questions, dispatch, answer, index } = useQuizs();

  const question = questions[index];

  return (
    <div>
      <h4>{question.question}</h4>

      <Options
        index={index}
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}
