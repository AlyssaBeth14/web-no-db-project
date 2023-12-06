import React from 'react'

const Rating = (props) => {
    const {isEditing, value, onValueChange} = props
  return isEditing ? (
    <>
    <select onChange={(e) => onValueChange(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>  
    </>
  ) : (
    <>
    {value}
    </>
  )
}

export default Rating