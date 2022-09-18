import React from 'react'
import useWordGame from './customHooks.js/useWordGame'

function App() {
  const {
          textUseRef, 
          handleChange, 
          text, 
          start, 
          counter, 
          startGame,
          score
        } = useWordGame(10);

  const styles = {
    color: counter === 0 ? 'red' : "lawngreen"
  }


  return (
    <div className="container">
      <h1>How Fast Can You Type?</h1>
      <textarea ref={textUseRef} onChange={handleChange} value={text} disabled={!start}/>
      <h1 style={styles}>Time Left: {counter}</h1>
      <button onClick={startGame} disabled={start}>Start Game</button>
      <h1>Word Count: {score}</h1>
    </div>
  );
}

export default App;
