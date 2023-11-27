import React from "react";

export default function PrevButton({dispatch, index, numQuestions}) {

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
