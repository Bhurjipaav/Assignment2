import Card from './card.js';
import CardS from './card_s'
import CardT from './card_t.js';
import list from "./mitems.js"
import list1 from "./sitems.js"
import list3 from './titems.js';
import React, {useEffect, useState} from "react";
import Form from "./from.js"


export default function Navbar({handleClick}) {

    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [carts, setCarts] = useState([])
    
      
    useEffect(()=>{
      console.log("cart change")
    }, [carts]); 
    return (

 <div className="Navbar">

        <div className = "dropdown">
        <div className = "dropdown-btn" onClick={(e) => 
        setIsActive1(!isActive1)}><h3>Sports</h3>
        </div>
        {isActive1 && (
        <div className='dropdown-contnt'>
        {list1.map((item) =>(
                <CardS key={item.id} item={item} handleClick={handleClick}/>
            ) )}
        </div>
        )}

        <div className = "dropdown-btn" onClick={(e) => 
        setIsActive2(!isActive2)}><h3>Music</h3>
        </div>
        {isActive2 && (
        <div className='dropdown-contnt'>
        {list.map((item) =>(
                <Card key={item.id} item={item} handleClick={handleClick}/>
            ) )}
        </div>
        )}
                    
        <div className = "dropdown-btn" onClick={(e) => 
        setIsActive3(!isActive3)}><h3>Tech</h3>
        </div>
        {isActive3 && (
        <div className='dropdown-contnt'>
        {list3.map((item) =>(
                <CardT key={item.id} item={item} handleClick={handleClick}/>
            ) )}
        </div>
        )}  
        
        <section className='form'>
        <h2>Subscribe to know updates</h2>
        <Form />
      </section>
        </div>
        </div>
    );
        }