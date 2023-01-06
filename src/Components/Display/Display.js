import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div>
           <h2>name:{props.name}</h2> 
           <p>steps:{props.step}</p>
           <Dial step={props.step}></Dial>
        </div>
    );
};

export default Display;