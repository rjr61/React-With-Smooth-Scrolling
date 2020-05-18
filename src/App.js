import React, {  Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
import Home from "./Components/Home.js";
import About from "./Components/About.js";
class App extends Component {
  render() {
    return (
      <div className="App" class="App">
        <Home/>
        <Navbar/>
        <About/>
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
