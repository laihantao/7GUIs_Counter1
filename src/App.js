import './App.css';
import React from 'react';
import { useState } from 'react';




function App() {

  const [state, setstate] = useState(0)

  function incrementnumber(){
    setstate((prevCount) => prevCount + 1)
  }



  return (
    <div className="App">
      <div>
      <header>Counter</header>
      </div>
      <span>{state}</span>
      <button onClick={incrementnumber}> Count </button>
    </div>
  );
}

export default App;
