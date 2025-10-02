import { useState } from 'react';
import './App.css'



const Card = (props) => {
    
    return (
        <>
        <div onClick={props.flipFunction} className="card-container">
            <div className={props.flipped}>
                <div className='front'>{props.card[props.cardNum].question}</div>
                <div className='back'>{props.card[props.cardNum].answer}</div>
            </div>
        </div>
        </>
    )
};

export default Card;