import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
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
  return (
    <>
      <div className="container">
        <h2>{props.title}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to Lower Case
          </button>
        </div>
        <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} words, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
