import React from "react";

import './App.scss'
import Intro from "./components/intro/Intro";
import Content from "./components/content/Content";

const App =() => {
  return (
    <div className="App">
      <Intro />
      <Content />
    </div>
  );
}

export default App;
