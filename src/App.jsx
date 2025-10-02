import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

function App() {

  const values = [
  { question: 'Start!', answer: 'Press next!' },
  { question: '1', answer: '一' },
  { question: '2', answer: '二' },
  { question: '3', answer: '三' },
  { question: '4', answer: '四' },
  { question: '5', answer: '五' },
  { question: '6', answer: '六' },
  { question: '7', answer: '七' },
  { question: '8', answer: '八' },
  { question: '9', answer: '九' },
  { question: '10', answer: '十' }
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

  const [index, setIndex] = useState(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  const [cardNum, setCardNum] = useState(0);
  const [flipped, setFlipped] = useState('card');
  
  const getIndex = () => {
    let i = Math.floor(Math.random() * index.length);
    let returnVal = index[i];
    const newIndex = [...index];
    newIndex.splice(i, 1);
    setIndex(newIndex);
    return returnVal;
  }
  
  const clickNext = () => {
    setFlipped('card');
    setTimeout(() => {
      if (index.length > 0) {
        setCardNum(getIndex());
      }
    }, 180)
    
  };

  const clickCard = () => {

    if (flipped.includes('flipped')) {
      setFlipped('card');
      
    } else {
      setFlipped('card flipped');
    }
  };  

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
      <button className="next" onClick={clickNext}>Next</button>
    </div>
  )
};

export default App
