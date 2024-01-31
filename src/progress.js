import React, {useState, useEffect} from 'react'
import './progress.css'

const ProgressBar = (props) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log('in val',value);
        const id = setInterval(() => {
            setValue((val) => val + 1)
        }, 100);
        if(value == 100){
            clearInterval(id)
        }
    },[])
    return (
        <div className='progress'>
            {value}%
            <span className='runner'></span>
        </div>
    )

}

export default ProgressBar;