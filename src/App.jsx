import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

function App() {

  const front = ['Start!', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const back = ['Press next!', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

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
  const [card, setCard] = useState(front);
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
      setCard(front);
      if (index.length > 0) {
        setCardNum(getIndex());
      }
    }, 180)
    
  };

  const clickCard = () => {

    if (flipped.includes('flipped')) {
      setFlipped('card');

      setTimeout(() => {
        setCard(front)
      }, 180);
      
    } else {
      setFlipped('card flipped');
      setTimeout(() => {
        setCard(back)
      }, 200);
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
        <h4>Number of cards: {front.length - 1}</h4>
      </div>
      <div className='outer-card'>
        <Card flipped={flipped} cardNum={cardNum} card={card} flipFunction={clickCard}/> 
      </div>
      <button className="next" onClick={clickNext}>Next</button>
    </div>
  )
};

export default App
