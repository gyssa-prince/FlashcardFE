import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';
import { FLASHCARD_QUERY, CREATE_FLASHCARD } from "../api";
import Dashboard from './dashboard'

export default function AddFlashcard() {
    const [create] = useMutation(CREATE_FLASHCARD)
    function CreateCard(){
        var createCard ={
            question:document.getElementById('Question').value,
            answer:document.getElementById('Answer').value
          } 
          if (createCard.question!='' && createCard.answer!='') {
            create({variables:createCard})
            }
        else{
            alert("Fill all inputs!")
        }
    }
  return (
      <>
    <div className='blur'>
      <Dashboard/>
    </div>
    <div className="addCard">
        <h2 align="center">Create a flashcard</h2>
        <div className="Addform">
            <legend>
        <label>Question:</label><br/>
  <input type="text" id="Question" placeholder='Something?'/><br/>
  <label>Answer:</label><br/>
  <input type="text" id="Answer" placeholder='Something'/><br/><br/>
  <button onClick={()=>CreateCard()}>Submit</button>
  <div className="cancel">
  <a href='../login'><button>Cancel</button></a>
  </div>
  </legend>
        </div>
    </div>
    </>
  )
}
