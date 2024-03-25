import React, { useState } from 'react' 

const ShowText = (props) => {
  const [input, setInput] = useState('');
  
  return(<input id="inputText" value={input} onChange={(e) => setInput(e.target.value)}/>)
 }

export default ShowText;