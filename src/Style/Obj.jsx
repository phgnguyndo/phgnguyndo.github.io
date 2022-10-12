import React, { Component } from "react";
import "./style.css";


const Obj = () => {
  return (
    <>
      <div className="display">
        <div className="card">
          <img className="image" src="Linh.jpg" />
          <h1 id="id01">Khanh Linh</h1>
          <h2 id="id02">Doctor</h2>
          
          <a  href="https://www.facebook.com/iamlinhhhh/friends">
          <img className="id03" src="faceb.png"/>
          </a> 
          <a  href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F__klinn%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR3ARBKObU5CmMOaf3EdEiLf1VrpkNBIx9S19CJ96tWkrLs9d13d_FWXErc&h=AT3g8xLz7KKqonhKh6fu9t20EDqXAZO8klUfIs_2lVjzTQkldKDcJjM0WrYPXK7Ssi6jjMbfPM7NaAZY1Kicz7uEZPLIaLBxahpEwIDKCKGYRrasHbh4p6xYXr4egQ2u9DzIcw">
          <img className="id03" src="Instagram-Icon.png"/>
          </a>

          <div>
          <button className="id04">Contact me</button> 
          </div>      
        </div>
        
      </div>
    </>
  );
};

export default Obj;
