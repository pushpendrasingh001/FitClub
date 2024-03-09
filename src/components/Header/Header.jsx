import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false);

  return (
    <div className="header" id="homes">
      <img className="logo" src={Logo} alt="missing " />
      {menuOpened === false && mobile === true ? (
        <div className="hamburger" onClick={() => setmenuOpened(true)}>
          <img
            src={Bars}
            alt="missing"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <a onClick={()=>setmenuOpened(false)} className="anchor-tag" href="#homes">Home</a>
          <a onClick={()=>setmenuOpened(false)}className="anchor-tag" href="#programs">Program</a>
          <a onClick={()=>setmenuOpened(false)}className="anchor-tag" href="#reasons">Why us</a>
          <a onClick={()=>setmenuOpened(false)} className="anchor-tag" href="#plans">Plans</a>
          <a onClick={()=>setmenuOpened(false)}className="anchor-tag" href="#testimonials">Testimonials</a>
        </ul>
      )}
    </div>
  );
};

export default Header;
