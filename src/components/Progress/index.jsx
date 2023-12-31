import React from "react";
import { useQuizs } from "../../context/QuizContext";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuizs();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + (answer[index] !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
