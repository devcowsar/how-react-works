import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Dial from '../Dial/Dial';

const Watch = (props) => {
    const [steps,setSteps]=useState(0);
    const increaseSteps= () =>{
        const newStepsCounts=steps+1;
        setSteps(newStepsCounts);
    }
    useEffect(()=>{console.log(steps)},[steps])
    return (
        <div>
            <h1>This is my:{props.name}</h1>
            <h3>my current steps:{steps}</h3>
            <button onClick={increaseSteps}>increasing</button>
            <Display name='payel' step={steps}></Display>
        

        </div>
    );
};

export default Watch;