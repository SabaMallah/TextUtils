import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <h2>{props.title}</h2>
      <div class="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        >
          {text}
        </textarea>
        <button className="btn btn-primary">Convert to Upper Case</button>
      </div>
    </>
  );
}
