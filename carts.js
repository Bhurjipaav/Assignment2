import React from 'react';


const Carts = ({carts,setCarts}) => {
    const handleRemove = (id) => {
        const arr = carts.filter((item) => item.id !== id);
        setCarts(arr);
    }
    const handleChange = (item, d) => {
        const ind = carts.indexOf(item);
        const arr = carts;
      }
      function Issue () {
        alert('Orders placed, you can collect the equipments from the store room');
      }
    return( 
     <article>
        {carts.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="item-title">
            
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button> 
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
        
      ))}<br></br>
      <div><button onClick={Issue}>Issue</button></div>
     </article>
    );
}

export default Carts;