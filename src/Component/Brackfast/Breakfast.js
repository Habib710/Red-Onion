import React from 'react';
import './break.css'

const Breakfast = (props) => {
    const {id,name,picture,about,price}=props.data;
    
    return (
        <div className='cart-css '>
            <img width='130px' src={picture} alt="" />
           <h4> {name}</h4>
           <h5>Price: $ {price}</h5>
        </div>
    );
};

export default Breakfast;