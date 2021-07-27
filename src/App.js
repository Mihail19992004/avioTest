
import './App.css';
import {Filtres} from "./Components/Filters";
import React from "react";
import {Main} from "./Components/Main";
import test from './flights.json'
function App() {
    console.log(test)
  return (
    <div className="App">
      <Filtres />
      <Main test={test} />
    </div>
  );
}

export default App;
