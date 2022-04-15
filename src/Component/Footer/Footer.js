import React from 'react';
import img from '../../images/favicon.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer '>
            <div>
                <img width='150px' src={img} alt="" />
            </div>
            <div className='mt-4 text-white'>
                <h6>All The Right Reserved</h6>
                <h6>Copyright@ 2022</h6>
                <p>Md Habib</p>
            </div>
        </div>
    );
};

export default Footer;