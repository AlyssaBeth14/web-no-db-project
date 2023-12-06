import React from 'react'

const Cover = (props) => {

const {isEditing, value, onValueChange} = props

return isEditing ? (
<>
<input 
img src={value}
onChange={(e) => onValueChange(e.target.value)} />
</>
) : (
 {value}
)
}

export default Cover