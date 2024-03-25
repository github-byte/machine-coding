import React, { useEffect, useState } from 'react'

const ShowDiv = (props) => {
  const [text, setText] = useState('')
  console.log('inside input 22')
  return(
    <div>{text}</div>
   )

 }

export default ShowDiv