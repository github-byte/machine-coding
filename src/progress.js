import React, { useState, useEffect, useRef } from 'react'
import './progress.css'

const ProgressBar = (props) => {
    const [value, setValue] = useState(0);
    const intervalRef = useRef(null);
    
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setValue((val) => val + 1)
        }, 100);
    }, [])
    useEffect(() => {
        if (value === 100) {
            clearInterval(intervalRef.current)
        }
    }, [value])
    return (<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className='progress'>
            {/* {value}% */}
            <span style={{ width: `calc(${value}*90vw/100)`, height: 'inherit', backgroundColor: 'green' }} className='runner'></span>
        </div>
        {value}%
    </div>
    )

}

export default ProgressBar;