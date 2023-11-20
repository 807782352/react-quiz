import React from "react";
import DateCounter from "./components/DateCounter";
import Header from "./Header";
import { useEffect } from "react";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
  }
}

export default function App() {
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(err => console.error("Error"));
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </main>
    </div>
  );
}
