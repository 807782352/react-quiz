import React from "react";
import { useQuizs } from "../../context/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuizs();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 90 && percentage < 100) emoji = "🥈";
  else if (percentage >= 80 && percentage < 90) emoji = "🥉";
  else if (percentage >= 60 && percentage < 80) emoji = "🎉";
  else if (percentage >= 0 && percentage < 60) emoji = "✊";
  else emoji = "⭕";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.round(percentage)}%)
      </p>
      <p className="highscore">(Highest Score: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
