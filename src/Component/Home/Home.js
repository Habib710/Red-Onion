
import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Breakfast from '../Brackfast/Brackfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Midheader from '../Mid-Header/Midheader';
import './Home.css'

const Home = () => {
    return (
        <div>
          <header className='header-css '>
              <div>
              <h1>Best Food Waiting for your belly</h1>
              <br />
              <InputGroup  className=" w-25 m-auto searchbar">
   
              <FormControl className='searchbar'
      placeholder="Search your food"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
     
    
    <Button className='btn-css ms-auto' id="button-addon2">
      Search
    </Button>
  </InputGroup>

              </div>
              
          </header>
          <div>
              <Midheader></Midheader>
              <section>
                  <div id='breakfast' className='brak-css'>
                      <Breakfast></Breakfast>

                  </div>
                  <div id='lunch'>
                      <Lunch></Lunch>

                  </div>
                  <div id='dinner'>
                      <Dinner></Dinner>

                  </div>



              </section>
              
                




          </div>
        </div>
    );
};

export default Home;<h1>Home</h1>