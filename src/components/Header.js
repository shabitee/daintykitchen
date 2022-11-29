import React from 'react';
function Header(){
    return(
    <div>
    <h1 className="logo">Dainty Kitchen</h1>
    <h3 className="top-text">African Cuisine at it's best</h3>

    <header id="top-page" />
  
              <button className="listing1">About Us</button>
              <p className = "text1">At Dainty Kitchen, we make delicious homme made African meals.</p>
              <button className= "listing2">Contact us</button>
              <p className = "text2">Tel: 001160116. Email:DK@yahoo.com</p>
              <button className="listing3">Menu</button>
              <div className = "listing4">
                <ul>
                 <li>Poundo</li><br/><br/>
                 <li>Meat-Pie</li><br/><br/> 
                 <li>Gizz-Dodo</li><br/><br/>
                 <li>Jollof-Rice</li><br/><br/>
                 <li>Fried-Rice</li><br/><br/>               
                 <li>Scotch-Egg</li><br/><br/>
                 </ul>
                 
              
              <div id="shopping-cart">
                <i class="fa-solid fa-cart-shopping" ></i>
                <span id="cart-total-cost"></span>
              </div>
              <header/>
    </div>
    </div>
    );
}
export default Header;