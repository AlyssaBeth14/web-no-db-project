//import './BookDisplay.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import BookCard from './BookCard.jsx'


const bookDisplay = (props) => {
  const [currentData, SetCurrentData] = useState([])


  const addCard = () => {
    axios.post('/book', {})
    .then((res) => {
      console.log(res.data);
      SetCurrentData(res.data)
    })
    .catch((theseHands) => {
      console.log(theseHands);
    })
  }

    const deleteCard = () => {
      axios.delete(`/book/${id}`)
      .then((res) => {
        console.log(res.data);
        SetCurrentData(res.data)
      })
      .catch((theseHands) => {
        console.log(theseHands);
      })
    }
  
  
  
  return (
    <div>
      <BookCard />
    </div>
  )
}

export default bookDisplay