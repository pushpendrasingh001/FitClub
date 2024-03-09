import React ,{useState} from 'react'
import "./Testimonials.css"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {testimonialsData} from "../../data/testimonialsData"
import {motion} from "framer-motion"
function Testimonials() {
  const transition={type:"spring",duration:3}; 
  const [selected,setselected]=useState(0); 
  const tlength=testimonialsData.length;
  return (
    <div>
    <div className="testimonials" id='testimonials' >
  <div className="left-t">
    <span>Testimonials</span>
    <span className='stroke-text'>What they</span>
    <span> say about us</span>
    <motion.span
    key={selected}
    initial={{opacity: 0, x:100}}
    exit={{opacity:0,x:-100}}
    animate={{opacity:1,x:0}}
    transition={transition}
    whileInView={{opacity:1,x:0}}
    >{testimonialsData[selected].review}</motion.span>
    <span>
      <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>{" "} - {testimonialsData[selected].status}
      </span>
    </div>
    <div className="right-t">

      <motion.div
      initial={{opacity: 0, x:-100}}
      transition={{...transition,duration:2}}
      whileInView={{opacity:1,x:0}}
      className='pic-border-1'></motion.div>
      <motion.div
      initial={{opacity: 0, x:100}}
      transition={{...transition,duration:2}}
      whileInView={{opacity:1,x:0}}
       className='pic-border-2'></motion.div>
      <motion.img
      key={selected}
      initial={{opacity: 0, x:100}}
      exit={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      transition={transition}
      whileInView={{opacity:1,x:0}}
       src={testimonialsData[selected].image} alt="missing" />
      <div className="arrows">
        <img onClick={()=>{selected===0?setselected(tlength-1):setselected((prev)=>prev-1)}} src={leftArrow} alt="missing" />
        <img onClick={()=>{selected===tlength-1?setselected(0):setselected((prev)=>prev+1);}}  src={rightArrow} alt="" />
      </div>
      </div>    
     </div>
    </div>
  )
}

export default Testimonials
