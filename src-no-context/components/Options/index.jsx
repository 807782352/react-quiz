import React from "react";

export default function Options({ question, dispatch, answer, index }) {
  const hasAnswered = answer[index] !== undefined;

  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          className={`btn btn-option ${idx === answer[index] ? "answer" : ""} ${
            hasAnswered &&
            (idx === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: idx });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
