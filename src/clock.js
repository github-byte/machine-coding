import React from 'react'
import './clock.css'

const WallClock = (props) => {
  return(
    <div>
        <div style={{borderRadius: '100%', border:'10px solid black', width: 300, height: 300, display:'flex', justifyContent:"center", alignItems:'center'}}>
            {/* nnd */}
            <div style={{borderRadius:'100%', width:10, height:10, background:'black'}}></div>
            <div className='minutes' style={{width:10, height:200, background:'black'}}></div>
            ssdn
        </div>
    </div>
   )

 }

export default WallClock;