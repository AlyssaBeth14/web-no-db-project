import React from 'react'
import {useState, useEffect} from 'react'
//import './BookCard.css'

const bookCard = (props) => {

  }

  return (
    <div>
      <input img src="" id="cover"/>
      <input id="title"/>
      <input id="author"/>
      <select id="rating">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <input id="genre"/>
      <button onClick="">Edit</button>
      <button onClick="">Delete</button>
    </div>
  )


export default bookCard