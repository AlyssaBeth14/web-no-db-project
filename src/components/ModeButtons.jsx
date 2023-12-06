import React from 'react'

const ModeButtons = (props) => {
const {isEditing, changeEditMode, changeNormalMode, deleteCard} = props

if(isEditing){
    return <>
    <button onClick={changeNormalMode}>Save</button>
    </>
} else {
    return <>
    <button onClick={deleteCard}>Delete</button>
    <button onClick={changeEditMode}>Edit</button>
    </>
}
}

export default ModeButtons