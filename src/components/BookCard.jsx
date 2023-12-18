import React from 'react'
import {useState, useEffect} from 'react'
//import './BookCard.css'
import axios from 'axios'
import Cover from './Cover.jsx'
import Title from './Title.jsx'
import Author from './Author.jsx'
import Rating from './Rating.jsx'
import Genre from './Genre.jsx'
import ModeButtons from './ModeButtons.jsx'

const bookCard = (props) => {
const{initialCardData, initialEditMode, deleteCard, currentData, setCurrentData} = props

const [editMode, setIsEditing] = useState(initialEditMode)
const [title, setTitle] = useState(initialCardData.title)
const [author, setAuthor] = useState(initialCardData.author)
const [rating, setRating] = useState(initialCardData.rating)
const [genre, setGenre] = useState(initialCardData.genre)

const changeEditMode = () => setIsEditing(true)
const changeNormalMode = () => {
  const bodyObj = {
    title,
    author,
    rating,
    genre
  }

  axios.put(`/book/${initialCardData.id}`, bodyObj)
  .then((res) => {
    setCurrentData(res.data)
    setIsEditing(false)
  })
  .catch((theseHands) => {
    console.log(theseHands);
  })
}
  }

  return (
    <div>
      <>
      <Cover />
      </>
      <>
      <Title />
      </>
      <>
      <Author />
      </>
      <>
      <Rating />
      </>
      <>
      <Genre />
      </>
      <>
     <ModeButtons />
      </>
    </div>
  )


export default bookCard