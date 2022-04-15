
import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Breakfast from '../Brackfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';
import Midheader from '../Mid-Header/Midheader';
import './Home.css'

const Home = () => {
    const [seletcfood,setseletcfood]=useState([]);
  


    const [foods,setfoods]=useState([])
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setfoods(data));
        

    },[])

    const hendel=()=>{
       let myfoods = foods.filter(function(food){
           return food.type==="dinner"
       });
       setseletcfood(myfoods)

    }
    const hendelbreak=()=>{
       let myfoods = foods.filter(function(food){
           return food.type==="breakfast"
       });
       setseletcfood(myfoods)

    }
    
    const hendellunch=()=>{
       let myfoods = foods.filter(function(food){
           return food.type==="lunch"
       });
       setseletcfood(myfoods)

    }
    


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
              <div className='css-mid'>

              <Link onClick={hendelbreak} to='#breakfast'>Breakfast</Link>
              <Link onClick={hendellunch} to='#breakfast' >Lunch</Link>
              <Link onClick={hendel} to='#breakfast'>Dinner</Link>

              </div>
              <section className='container'>
          
                  <div id='breakfast ' className='brak-css my-4'>
                      
                      {
                          seletcfood.length?
                          seletcfood.map(food=><Breakfast key={food.id} data={food}></Breakfast>)
                          :  
                          foods.slice(0,6).map(food=><Breakfast key={food.id} data={food}></Breakfast>)

                      }

                  </div> 
                  <Midheader></Midheader>  

              </section>
          </div>
        </div>
    );
};

export default Home;<h1>Home</h1>