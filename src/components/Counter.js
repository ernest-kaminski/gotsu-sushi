import React, { useState } from 'react'
import './Counter.css'

function Counter(props){
    const [count, setCount] = useState(0);
    const totalPrice = props.price;

    const increaseCounter = () => {
        setCount(count + 1);
    }

    const decreaseCounter = () => {
        if(count > 0){
            setCount(count - 1) ;
        }        
    }
        return (    
        <div className='counter-container'>            
            <button className='increase-and-decrease-button' onClick={increaseCounter}>Plus</button>
            {count}
            <button className='increase-and-decrease-button' onClick={decreaseCounter}>minus</button>
            <button onClick={props.counterHandleClick(count)}>test</button>
            <div className='total-cost'>{totalPrice*count}</div>
        </div>
        )
}

export default Counter