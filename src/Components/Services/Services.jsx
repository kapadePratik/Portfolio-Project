import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from './Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services">

    {/* Left Side */}
    <div className="awesome">
      <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
      <span>Services</span>
      <span>Lorem ipsum is simply dummy text of printing of lorem ipsum
      <br/>
      Ipsum is simply dummy tetx of printing
      </span>
       <a>
       <button className='button s-button'>Download CV</button>
       </a>
     
      <div className="blur s-blur" style={{
        background: "#ABF1FF94",
      }}></div>
    </div>
       
       {/* Right Side */}

       <div className="cards">

        <div style={{
            left:"14rem",

        }}>
            <Card
              emoji = {HeartEmoji}
              heading = {'Design'}
              detail = {"Figma, Sketch,Photoshop, Adobe, Adobe xd"}
            />
        </div>
        {/* Second Card */}

           <div style={{
             top:"12rem",
             left:"-4rem",
           }}>
            <Card 
                emoji = {Glasses}
                heading={"Developer"}
                detail={"Html, Css, JavaScript, React"}
            />
           </div>

             {/* Third Card */} 
             <div style={{
                top:"19rem",
                left:"12rem",
             }}>
                <Card
                  emoji={Humble}
                  heading={"UI/Ux"}
                  detail={"Lorem ipsum text are usually use in section where we need some random text"}
                />
             </div>

             <div className='blur s-blur2' style={{
                background: "var( --purple)",
             }}></div>
       </div>
   </div>
  )
}

export default Services;
