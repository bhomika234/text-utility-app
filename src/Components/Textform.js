import React, { useState, useRef } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const handleUppercase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "warning");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed", "success");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const headingStyle = {
    color: props.mode === "dark" ? "white" : "#042743"
  };

  return (
    <>
      <div className="container">
        {/* ✅ FIXED HEADING */}
        <h1 style={headingStyle}>{props.heading}</h1>

        <textarea
          ref={textRef}
          className="form-control mb-3"
          value={text}
          onChange={handleChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            color: props.mode === "dark" ? "white" : "#042743"
          }}
        />

        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>
          Uppercase
        </button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>
          Lowercase
        </button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>
          Sentence Case
        </button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
        <button disabled={!text} className="btn btn-danger mx-1 my-1" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div
        className="container my-3 p-3"
        style={{
          backgroundColor: props.mode === "dark" ? "#343a40" : "#f8f9fa",
          color: props.mode === "dark" ? "white" : "#042743",
          borderRadius: "5px"
        }}
      >
        {/* ✅ FIXED SUMMARY HEADINGS */}
        <h2 style={headingStyle}>Text Summary</h2>
        <p>{wordCount} words & {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2 style={headingStyle}>Preview</h2>
        <p>{text || "Enter text to preview here..."}</p>
      </div>
    </>
  );
}
