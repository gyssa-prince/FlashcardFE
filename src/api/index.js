import {  gql } from '@apollo/client';

export const FLASHCARD_QUERY = gql`
{
    flashcards{
        id
        question
        answer
        created
      }}
`
;

export const CREATE_FLASHCARD = gql`
mutation  createFlashcard(
  $question: String!
  $answer: String!
) {
  createFlashcard(answer: $answer, question: $question) {
   id
  }
}
`;  
export const UPDATE_FLASHCARD = gql`
mutation  updateFlashcard(
  $id: Int!
  $question: String!
  $answer: String!
  
) {
  updateFlashcard(id:$id,answer: $answer, question: $question) {
   id
  }
}
`;    
export const DELETE_FLASHCARD = gql`
mutation  deleteFlashcard(
  $id: Int!

) {
  deleteFlashcard(id:$id) 
}
`;    