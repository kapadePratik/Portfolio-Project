import React from "react";
import '../Components/Navbar.css';
import Toggle from "./Toggle/Toggle";

const Navbar =  ()=>{
    return (
        <>
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle />
                <div className="n-right">
                    <div className="n-list">
                        <ul style={{
                            listStyleType:'none',
                            marginLeft:"8rem",
                        }}>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Experience</li>
                            <li>Portfolio</li>
                            <li>Testtomonials</li>
                        </ul>
                    </div>
                    <button className="button n-button">
                        Contact
                    </button>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Navbar;