import React from 'react'
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fliver from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="works">

<div className="awesome">
      <span  style={{color: darkMode? 'white': ''}}>Works for All these</span>
      <span>brand & Clients</span>
      <span>Lorem ipsum is simply dummy text of printing of lorem ipsum
      <br/>
      Ipsum is simply dummy tetx of printing
      <br/>
      Ipsum is simply dummy tetx of printing tetx for printing
      <br/>
      Ipsum is simply dummy text
      </span>
       <a>
       <button className='button s-button'>Hire me</button>
       </a>
     
      <div className="blur s-blur" style={{
        background: "#ABF1FF94",
      }}></div>
    </div>
        {/* Right side */}

        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt='' />
                </div>

                <div className="w-secCircle">
                    <img src={Fliver} alt='' />
                </div>

                <div className="w-secCircle">
                    <img src={Amazon} alt='' />
                </div>

                <div className="w-secCircle">
                    <img src={Shopify} alt='' />
                </div>

                <div className="w-secCircle">
                    <img src={Facebook} alt='' />
                </div>
            </div>

            {/* background circle /blue / yellow */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>



        </div>
   </div>
  )
}

export default Works
