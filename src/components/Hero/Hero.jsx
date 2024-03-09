import React from 'react'
import './Hero.css'
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from "number-counter"
function Hero() {
  const mobile=window.innerWidth<=768 ?  true:false;
  const transition={type:'spring','duration':5}
  return (
    <div className="hero">
    <div className="blur hero-blur"></div>
      <div className="left-h"><Header/>
      <div className='the-best-ad'>
        <motion.div
          initial={{left:mobile?"178px":'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
        ></motion.div>
       <span>THE BEST FITNESS CLUB IN THE   TOWN </span>
      </div>
      <div className='hero-text' >
        <div>
          <span className='stroke-text'>SHAPE</span>
          <span>YOUR</span>
          </div>
          <div>
          <span>IDEAL BODY</span>
        </div>
        <div>
        <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span>
      </div>
      </div>
    {/*figures*/}
      <div className="figures">
        <div><span>
          <NumberCounter end={140} start={100} delay='4' postFix='+'/>
        </span>
        <span> Expert Coaches</span>
        </div>
        <div><span><NumberCounter end={978} start={900} delay='4' postFix='+'/></span><span>Member Joined</span></div>
        <div><span><NumberCounter end={50} start={30} delay='4' postFix='+'/></span><span>Fitness Programs</span></div>
      </div>
      {/*hero button*/}
      <div className="hero-buttons">
         <button className="btn">Get Started</button> 
         <button className="btn"> Learn More</button>    </div>
      </div>
      <div className="right-h">
        <button className='btn'> Join Now </button>


        <motion.div initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={transition} className="heart-rate">
          <img src={ Heart} alt="" />
          <span>Heart Rate </span><span>116 bpm</span>
          </motion.div>
        <img className='hero-image' src={hero_image} alt='missing'/>
        <motion.img 
         initial={{right:'11rem'}}
         whileInView={{right:'20rem'}}
         transition={transition}
        className='hero-image-back' src={hero_image_back} alt="missing"></motion.img>

        <motion.div className='calories'
         initial={{right:'37remx'}}
         whileInView={{right:'28rem'}}
         transition={transition}>
        <img src={Calories} alt="missing" />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
        
        </motion.div>
      </div>
    </div>
  )
} 

export default Hero
