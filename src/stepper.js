import React, { useEffect, useState } from 'react';
import './style.css'

export function Stepper(props) {
    const [steps, setSteps] = useState(0);
    const [stepsArr, setStepsArr] = useState([false, false, false, false])
    // const stepsArr = [{ label: 1, status: false }, { label: 2, status: false }, { label: 3, status: false }];
    const handlePrev = () => {
        if(steps === 0) return;
        let prev = steps;
        prev = prev - 1
        setSteps(prev)
        let arrayClone = [...stepsArr];
        arrayClone[prev] = !arrayClone?.[prev];
        setStepsArr(arrayClone)
    }
    const handleNext = () => {
        if(steps === stepsArr?.length) return;
        let next = steps;
        next = next + 1;
        setSteps(next)
        let arrayClone = [...stepsArr];
        arrayClone[next - 1] = !arrayClone?.[next - 1];
        setStepsArr(arrayClone)
    }
    // useEffect(() => {
    //     if(steps === 0) return;
    //     let stepsArrClone = [...stepsArr];
    //     console.log('in steps', stepsArrClone?.[steps - 1], steps)
    //     stepsArrClone[steps - 1] = !stepsArrClone?.[steps - 1];
    //     setStepsArr(stepsArrClone)
    // }, [steps])
    console.log("steps 223 arr", steps, stepsArr)
    return (
        <div className='App'>
            <h1>Hello React.</h1>
            {/* <h2>Start editing to see some magic happen!</h2> */}
            <div className="stepper">
                {stepsArr.map((item, index) => {
                    return (<div className="stepper" key={`stepper_${index}`}>
                        <div className={item ? "round-filled" : "round-unfilled"}>{index + 1}</div>
                        {index < stepsArr?.length - 1 && <div className={stepsArr?.[index - 1] ? "stick-filled" : "stick-unfilled"}></div>}
                    </div>)
                })
                }
            </div>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}