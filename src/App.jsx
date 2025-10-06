import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

function App() {

  const values = [
  { question: 'Start!', answer: 'Press next!' },
  { question: '一', answer: '1' },
  { question: '二', answer: '2' },
  { question: '三', answer: '3' },
  { question: '四', answer: '4' },
  { question: '五', answer: '5' },
  { question: '六', answer: '6' },
  { question: '七', answer: '7' },
  { question: '八', answer: '8' },
  { question: '九', answer: '9' },
  { question: '十', answer: '10' }
]

  const shuffle = (array) => {
        let i = array.length;
        let j = 0;
        let temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
  }

  const [indexArray, setIndexArray] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const [cardNum, setCardNum] = useState(0);
  const [flipped, setFlipped] = useState('card');
  const [index, setIndex] = useState(-1);
  const [input, setInput] = useState('');
  const [inputStyle, setInputStyle] = useState('guess-input');
  
  const clickNext = () => {
    setFlipped('card');
    setInputStyle('guess-input');
    setInput('');
    setTimeout(() => {
      setIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        setCardNum(indexArray[newIndex]);
        return newIndex;
      });
    }, 180)
  };

  const clickBack = () => {
    setFlipped('card');
    setInputStyle('guess-input');
    setInput('');
    setTimeout(() => {
      setIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        setCardNum(indexArray[newIndex]);
        return newIndex;
      });
    }, 180)
  };

  const clickCard = () => {

    if (flipped.includes('flipped')) {
      setFlipped('card');
      
    } else {
      setFlipped('card flipped');
    }
  };

  const saveInput = (e) => {
    setInput(e.target.value);
  }

  const checkInput = () => {
    if (input.length == 0) {
      setInputStyle('guess-input')
    } else if (input == values[cardNum].answer) {
      setInputStyle('guess-input correct')
    } else if (input != values[cardNum].answer) {
      setInputStyle('guess-input incorrect')
    }
  }



  return (
    <div className='card-app'>
      <div className='header'>
        <h1>⭐Japanese Number Quiz⭐</h1>
        <h3>
          Test your knowledge of the Japanese characters
          for numbers 1 through 10!
        </h3>
        <h4>Number of cards: {values.length - 1}</h4>
      </div>
      <div className='outer-card'>
        <Card flipped={flipped} cardNum={cardNum} card={values} flipFunction={clickCard}/> 
      </div>
      <div className='input-box'>
        <input className={inputStyle} type="text" value={input} onChange={saveInput} placeholder='Write your guess here!' disabled={index < 0}/>
        <button className='input-button' onClick={checkInput}>Submit</button>
      </div>
      <div className='button-box'>
        <button className="backButton" onClick={clickBack} disabled={index <= 0}>Back</button>
        <button className="nextButton" onClick={clickNext} disabled={index >= indexArray.length - 1}>Next</button>
      </div>
    </div>
  )
};

export default App
