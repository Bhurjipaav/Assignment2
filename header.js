import './App.css';
import test from "./test.png";


export default function Header ({ setShow, size}) {
    return(
        <div><h1>Inventory Portal</h1>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> Contact us </a>
      <section className='testimony'>
        <img src={test} alt = "t" />
        <div className='Cart'>
      <button className="my_shop" onClick={() => setShow(false)}>
          My Orders
        </button>
        <div className="cart" onClick={() => setShow(true)}>
          <span>{size}</span>
        </div>
        </div>
      </section></div>
      
      
    );
}