import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("handleUpClick clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("handleUpClick clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChnage = (event) => {
    console.log("handleonChange clicked");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.title}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="exampleFormControlTextarea1"
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary my-2" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleLowClick}
          >
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={removeExtraSpaces}
          >
            Remove Spaces
          </button>
        </div>
        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} words, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>
            {text.length > 0
              ? text
              : "Enter text in the textbox above to Preview"}
          </p>
        </div>
      </div>
    </>
  );
}
