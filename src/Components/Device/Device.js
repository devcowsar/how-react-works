import React from 'react';
import Devicedatils from '../Devicedatils/Devicedatils';
import Watch from '../Watch/Watch';

const Device = (props) => {
    return (
        <div>
           <h2>I have:{props.name}</h2> 
           <Devicedatils price='110000'></Devicedatils>
           <Watch name='Smart Watch'></Watch>
           
        </div>
    );
};

export default Device;