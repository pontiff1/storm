import React from 'react';
import './App.css';
import Myname from "./content/Myname/Myname";
import Counter from "./content/Counter/Counter";
import Todolist from "./content/Todolist/Todolist";

function App() {
  return (
    <div className="App">
      <Myname/>
      <Counter/>
        <div></div>
        <Todolist/>
    </div>
  );
}

export default App;
