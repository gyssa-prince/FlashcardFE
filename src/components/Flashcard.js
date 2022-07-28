import React from 'react'
import { useQuery } from '@apollo/client';

import { FLASHCARD_QUERY } from "../api";

export default function Flashcard() {
  const {data}=useQuery(FLASHCARD_QUERY);
  return (
    <>
    {data && 
    <div className="cards">
      <div className="tiTle">
        <h2 align="center"><u>Here is some mental workouts 😂</u></h2>
      </div>
    <div className="flashcards">
      {data.flashcards.map(flashcard=>{
        return( 
        <div className="flip-card">
        <div className='flip-card-inner'><div className="flip-card-front">
          <h3> {flashcard.question}</h3>
        </div>
        <div className='flip-card-back'>
        <h3> {flashcard.question}</h3>
        <h4>Answer: {flashcard.answer}</h4>
        </div>
        </div>
        </div>)
      })}
    </div>
    </div>
}
</>
)
}
