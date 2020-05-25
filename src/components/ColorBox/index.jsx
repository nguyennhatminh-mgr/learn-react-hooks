import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ColorBox.scss';

ColorBox.propTypes = {
    
};

const getRandomColor = () => {
    const COLOR_LISTS = ['deeppink','green','red','yellow','black','blue'];
    const randomIndex = Math.trunc(Math.random() * COLOR_LISTS.length);

    return COLOR_LISTS[randomIndex];
}

function ColorBox() {
    
    const [color,setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        return initColor;
    });

    const handleBoxClick = () => {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color',newColor);
    }

    return (
        <div>
            <p style={{color:color}}>Welcome to react hooks!!!</p>
            <div onClick={handleBoxClick} className="color-box" 
            style={{backgroundColor: color}}>  
            </div>
        </div>
    );
}

export default ColorBox;