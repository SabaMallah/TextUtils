import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" homeText="Home" />
      <TextForm title="Enter Text Here" />
    </>
  );
}

export default App;
