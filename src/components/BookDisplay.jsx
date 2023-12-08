//import './BookDisplay.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import BookCard from './BookCard.jsx'


const bookDisplay = (props) => {
  const [currentData, SetCurrentData] = useState([])

  useEffect(() => {
    axios.get('./books')
    .then((res) => {
      console.log(res.data);
      SetCurrentData(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


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

  
    const cards = currentData.map((el) => <BookCard 
    initialCardData={el}
    initialEditMode={false}
    key={el.id}
    deleteCard={() => deleteCard(el.id)}
    currentData={currentData}
    SetCurrentData={SetCurrentData}
    />)
  
  
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

  return (
    <div>
      <BookCard />
    </div>
  )
}

export default bookDisplay