import React from 'react';
import { Link } from 'react-router-dom';
import './mid.css'

const Midheader = () => {
    return (
        <div className='css-mid'>
            <Link to='#breakfst'>Breakfast</Link>
            <Link to='#lunch'>Lunch</Link>
            <Link to='#dinner'>Dinner</Link>
            
        </div>
    );
};

export default Midheader;