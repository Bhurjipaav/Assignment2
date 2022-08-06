import React from 'react';


const CardT= ({item, handleClick}) => {
    const {title} = item; 
    return(
        <div className='cards'>
            <div className='details'>
                <p>{title}<button onClick={()=>handleClick(item)}>Add to cart</button></p>             
            </div>
        </div> 
    );
}
    
export default CardT;