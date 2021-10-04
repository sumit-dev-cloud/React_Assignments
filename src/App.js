import React, { useState } from "react";
import "./App.css";

function App() {
  let [showParagraph, setShowParagraph] = useState(false);

  const onClickHandler = () => {
    setShowParagraph(true);
  };

  const getPara = () => {
    if (showParagraph) {
      return (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <button id="click" onClick={onClickHandler}>
        click
      </button>
      {getPara()}
    </div>
  );
}

export default App;
