import React, { useRef, useState } from 'react'

/**
* @author
* @function Otp
**/

const Otp = (props) => {
    const [otp, setOtp] = useState('');
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const [step, setStep] = useState([false, false, false, false])
    const handleChange = (e) => {
        const num = Number(e.target?.id)
        let stepArr = [...step]
        stepArr[num] = !stepArr[num]
        setStep(stepArr)
        input2.current.focus();
    }
    return (
        <div style={{ display: "flex" }}>
            <input type='number' ref={input1} id="1" value="" onChange={(e) => { handleChange(e, input2) }} />
            <input type='number' ref={input2} id="2" value="" onChange={(e) => { handleChange(e, input2) }} />
            <input type='number' ref={input3} id="3" value="" onChange={(e) => { handleChange(e) }} />
            <input type='number' ref={input4} id="4" value="" onChange={(e) => { handleChange(e) }} />
        </div>
    )

}

export default Otp;