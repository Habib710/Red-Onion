import React from 'react';
import'./mid.css';
import img from '../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../images/chef-cook-food-33614.png'
import img3 from '../../images/architecture-building-city-2047397.png'


const Midheader = () => {
    return (
        <div className='my-5 py-3'>
            <section>
                <div className='my-5'>
                <h3 className=''>Why you choose us </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta, repudiandae enim qui blanditiis quibusdam. Quasi enim culpa </p>
                </div>

                <div className='container custom'>
                    <div>
                        <div className='low-cart'>
                        <img width='100%' src={img} alt="" />
                        <div className='my-3'>
                            <h4>First Dalivery</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe assumenda,</p>
                        </div></div>
                    </div>
                    <div className='low-cart'>
                        <img width='100%' src={img2} alt="" />
                        <div className='my-3'>
                            <h4>A Good Auto Responder</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe assumenda,</p>
                        </div>
                    </div>
                    <div className='low-cart'>
                        <img width='100%' src={img3} alt="" />
                        <div className='my-3'>
                            <h4>Home Dalivery</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe assumenda,</p>
                        </div>
                    </div>



                </div>
            </section>
          
            
        </div>
    );
};

export default Midheader;