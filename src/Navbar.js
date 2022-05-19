import React from "react";
import "./css/Navbar.css";

const Navbar =()=>{
    return(
        <div>
        <h1>Lavalamp CSS Menu</h1>

        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Portefolio</a>
            <a href="#">Contact</a>
            <div class="animation start-home"></div>
        </nav>
        </div>
    );
};

export default Navbar;