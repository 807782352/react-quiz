import React from "react";
import { useQuizs } from "../../context/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuizs();

  if (answer[index] === undefined) return null;

  if (index + 1 < numQuestions) {
    return (
      <button
        className="btn "
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index + 1 === numQuestions) {
    return (
      <button className="btn " onClick={() => dispatch({ type: "finished" })}>
        Finished
      </button>
    );
  }
}
