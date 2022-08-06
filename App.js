
import React, {useState} from "react";
import Header from "./header";
import Navbar from "./navbar";
import Carts from "./carts";


function App() { 
  const [show, setShow] = useState(true);
  const [carts, setCart] = useState([]);

  const handleClick = (item) => {
    if (carts.indexOf(item) !== -1) return;
    setCart([...carts, item]);
  };

  

  return (
    
    <div className="App">
      
      <React.Fragment>
      <Header setShow={setShow} size={carts.length} />
      {show ? (
        <Navbar handleClick={handleClick} />
      ) : (
        <Carts carts={carts} setCart={setCart} />
      )}
    </React.Fragment>
      
    </div>
    
  );
}

export default App;
