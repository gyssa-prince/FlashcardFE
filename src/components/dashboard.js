import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useQuery, useMutation } from '@apollo/client';
import { FLASHCARD_QUERY, UPDATE_FLASHCARD, DELETE_FLASHCARD } from "../api";

export default function Dashboard() {
  const auth=localStorage.getItem("auth")
  if(!auth){
  window.location.assign("../")
  }
  const {data}=useQuery(FLASHCARD_QUERY);
        let i=0;
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");     
  const [UPDATED, { dataR, loading, errorG }] = useMutation(UPDATE_FLASHCARD)
  const [DELETE]= useMutation(DELETE_FLASHCARD)
  function Update(id){
    let obj = (data.flashcards).find(o => o.id === id);
    const update ={
      id:id,
      question:document.getElementById('Question'+id).value || obj.question,
      answer:document.getElementById('Answer'+id).value || obj.answer,
    } 
    if (update != '') {
      UPDATED({variables:update})
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
  
  }
  function Delete(id){
    if (window.confirm('Are you sure to delete this flashcard?')) {
      DELETE({variables:{id:id}})
      // setTimeout(() => {
      //   window.location.reload()
      // }, 2000);
  }else{ 
   window.location.reload()
  }}
  function Editable(id) {
    document.getElementById('Question'+id).readOnly = false;
    document.getElementById('Answer'+id).readOnly = false;
  }

  return (
    <>
    <div className='AddPost'><a href='/dashboard/add'><p align="right">Add a post</p></a></div>
    {data && 
    <div className='Dashboard'>
      <h1>OUR FLASHCARDS</h1>

<table id="fCards">
  <tr>
    <th>N<sup>o</sup></th>
    <th>Question</th>
    <th>Answer</th>
    <th>Action</th>
  </tr>
  {data.flashcards.map(flashcard=>{
      return(
      i++,
      <tr onClick={()=>Editable(flashcard.id)} className='Tdata'>
      <td>{i}</td>
      <td>
      <input className="INputs" type="text" id={'Question' + flashcard.id} placeholder={flashcard.question} readOnly />
      </td><td>
      <input className="INputs" type="text" id={'Answer' + flashcard.id} placeholder={flashcard.answer} readOnly />
      </td>
      <td>
      <td>
      <button onClick={()=> Update(flashcard.id)}>
                       <Icon icon="carbon:change-catalog" width="24"  color="green" />
                      </button>
      </td>
      <td>
      <button onClick={()=>Delete(flashcard.id)}>
                        <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
                      </button>
      </td>
      </td>
      </tr>
      )
  })}
  </table>
    </div>
}
</>
  )
}
