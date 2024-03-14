import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
function Reasons() {
  return (
    <div className='Reasons' id="reasons">
   <div class="grid-container">
        <div class="item1">
          <img src={image1} alt="missing" height={460} width={220} />
        </div>
        <div class="item2">
          <img src={image2} alt="missing" height={235} width={490} />
        </div>
        <div class="item3">
          <img src={image4} alt="missing" height={210} width={220} />
        </div>
        <div class="item4">
          <img src={image3} alt="missing" height={210} />
        </div>
        </div>
 

  <div className="right-r">
    <span>Some Reasons</span>
    <div className='reason-heading'><span className='stroke-text'>why</span><span>Choose us</span></div>
  <div className='details-r'>
    <div>
      <img src={tick} alt="missing"></img>
      <span>OVER 140+ EXPERT COACHES</span>
    </div>
    <div>
      <img src={tick} alt="missing"></img>
      <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
    </div>
    <div>
      <img src={tick} alt="missing"></img>
      <span>FREE PROGRAM FOR NEW MEMBER</span>
    </div>
    <div>
      <img src={tick}  alt="missing"></img>
      <span>RELIABLE PATNERS</span>
    </div>

  </div>
  <span id='brand'> OUR PARTNERS</span>
  <div className="partners"><img src={nb}alt="missing" /><img src={adidas} alt="missing" /><img src={nike} alt="missing" /></div>
  </div>
    </div>
  )
}

export default Reasons
