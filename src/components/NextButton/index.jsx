import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  
  if (index + 1 < numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index + 1 === numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finished
      </button>
    );
  }
}
