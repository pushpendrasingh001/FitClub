import React,{useRef} from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'
function Join() {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q45kqv4', 'template_ui6mrcs', form.current, {
        publicKey: 'izJ3X8q_R47jRu63e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div className="Join">
        <div className="left-j">
          <hr id='line'/>
          <div>
            <span className='stroke-text'> READY TO</span>
            <span>LEVEL UP</span>
            </div>
            <div>
            <span>YOUR BODY</span>
            <span  className='stroke-text'>WITH US</span>
            </div>
        </div>
        <div className="rigth-j">
          <form ref={form} action="" className="email-container"onSubmit={sendEmail} >
            <input type="email" name="user__email" placeholder='Enter your Email Address' />
            <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}  

export default Join
