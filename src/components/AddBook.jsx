import React from 'react'

const addBook = (props) => {

  const {addCard} = props
  return (
    <button onClick={addCard}>Add Book</button>
  )
}

export default addBook