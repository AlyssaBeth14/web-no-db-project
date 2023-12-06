import React from 'react'

const Genre = (props) => {
    const {isEditing, value, onValueChange} = props

return isEditing ? (
    <>
    <input
    type="text"
    value={value}
    onChange={(e) => onValueChange(e.target.value)}/>
    </>
) : (
    <>
    {value}
    </>
)
}

export default Genre