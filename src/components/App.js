import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";

const App = () => {
  return (
    <div id="main">
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <SubmitButton/>
    </div>
  )
}
export default './App.js';

