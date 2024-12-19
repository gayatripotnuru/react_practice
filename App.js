import React from  "react";
import ReactDOM from "react-dom/client";
import ReactLogo from "./images/KitchenLogo.png";

 

var LogoComponent=function(){
    return(
    <div className="header">
        <img src={ReactLogo} height="100px" className="logo"></img>
        <h2 className="heading">Multicuisine Restaurant</h2>
        </div>)
}

var ListItemComponent=function(){
    return(
<nav>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><a href="services">Services</a></li>
            </ul>
        </nav>
    )
}

const HeaderComponent = function () {
    return (
      <header className="header">
        <LogoComponent />
        <ListItemComponent />
      </header>
    );
  };

  const mainRoot = document.getElementById("root");
  const mainDom = ReactDOM.createRoot(mainRoot);

mainDom.render(<HeaderComponent/>)