import {useState, useEffect, useRef} from 'react'

function useWordGame(GAMECLOCK = 10) {

    const [counter, setCounter] = useState(GAMECLOCK);
    const [start, setStart] = useState(false);
    const [text, setText] = useState('');
    const [score, setScore] = useState(0);
    const textUseRef = useRef();
  
    function startGame() {
      setStart(true);
      setCounter(GAMECLOCK);
      setScore(0);
      setText('')
      textUseRef.current.disabled = false; // manually enable
      textUseRef.current.focus()
    }
  
    function endGame() {
      calcTotal(text);
      setStart(false);
    }
  
    function handleChange(e) {
      const { value } = e.target
      setText(prevText => value)
    }
  
    function calcTotal(text) {
      const words = text.trim().split(" ");
      const totalWords = words.filter( each => each !== "")
      setScore(totalWords.length);
    }
  
    useEffect(()=> {
      if(start && counter > 0) {
        setTimeout(() => {
          setCounter(prevCounter => prevCounter - 1)
        }, 1000);
      } else if(counter === 0) endGame();
    }, [counter, start]);
    
    return {textUseRef, handleChange, text, start, counter, startGame, score}
}

export default useWordGame;