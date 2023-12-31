import React from "react";
import { useQuizs } from "../../context/QuizContext";

export default function PrevButton() {
  const { dispatch, index, numQuestions } = useQuizs();

  if (index <= 0) return null;

  if (index + 1 <= numQuestions) {
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "prevQuestion" })}
      >
        Prev
      </button>
    );
  }
}
