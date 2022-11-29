import React from 'react';
import { useState } from "react";
const Body=()=>{
    const [counter, setCounter]=useState(0);

    const increament = ()=> {
        setCounter(counter + 10);
    };

    const decreament = ()=> {
        setCounter(counter - 10);
    };
    
    return(
        <div>
            <main/>
    <div className="container">
      
      <div className="cart">
        <div className="products">
          <div className="product1">
            <img id="hero-image1" src ="https://nomadparadise.com/wp-content/uploads/2020/08/nigerian-food-01-768x480.jpg.webp" alt="icon"/>
            <div className="product-info1">
              <h3 className="jollof-rice">Jollof-Rice</h3>
              <h3>Total: £{counter}</h3>
              <button onClick={()=>increament()}>Add to basket</button>
              <button onClick={()=>decreament()}>Remove</button>
              </div>

              <div className="product2">
              <img id= "hero-image2" src= "https://www.nairaland.com/attachments/3876297_13108993615067192003844570845822n_jpeg04a99d9cd6aced06920655a8a3089733" alt="icon"/>
              </div>
              <div className="product-info2">
                <h3 className="asun">Asun</h3>
                <h3>Total: £{counter}</h3>
                <button onClick={()=>increament()}>Add to basket</button>
                <button onClick={()=>decreament()}>Remove</button><br/><br/>
                </div>

                <div className="product3">
              <img id="hero-image3" src ="https://www.nairaland.com/attachments/3876309_125995131673564269563110991894637n_jpegdbb7dd573c1c2e292297d0ab7446fe97" alt="icon"/>
              <div className="product-info3">
                <h3 className="snail">Peppered Snail</h3>
                <h3>Total: £{counter}</h3>
                <button onClick={()=>increament()}>Add to basket</button>
                <button onClick={()=>decreament()}>Remove</button>
                
              </div>
            </div>
                
            </div>
            </div>


        </div>
        </div>
        </div>
        
        






    );
}

export default Body;