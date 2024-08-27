import Gymlogo from "../assets/image-video/logo.png";
import { Link } from "react-router-dom";
import MenuButton from "../assets/image-video/menuButton.svg";
import CloseButton from "../assets/image-video/closeButton.svg";
import { useState } from "react";


export default function Header() {

    const [isShow,setShow]=useState(false);
    function handlemenu(){
        setShow(!isShow);
    }

    

    return (
        <>
            <header>
                <nav className="menu">
                    <ul className="left-menu">
                        <li id="hideonMobile"><Link to="/">Home</Link></li>
                        <li id="hideonMobile"><Link to="/facilites">Facilities</Link></li>
                        <li id="hideonMobile"><Link to="/memberarea">Member Area</Link></li>
                    </ul>
                    <img loading="lazy" src={Gymlogo} className="img" alt="Gym Logo"/>
                    <ul id="hideonMobile" className="right-menu">
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/downloadapp">Download App</Link></li>
                    </ul>
                    <span id="hideonDESKTOP" style={{ flex: 1,}}><li className="MenuButton" onClick={handlemenu} style={{display: !isShow ? "flex" : "none",justifyContent: "flex-end"}}><img src={MenuButton} style={{height:"30px",width:"30px", padding:"0 20px"}}/></li></span>
                    <ul className="mobile-menu" style={{display: isShow ? "flex" : "none"}}>
                        <li onClick={handlemenu}><img src={CloseButton} style={{height:"30px",width:"30px", padding:"0 20px"}}/></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/facilites">Facilities</Link></li>
                        <li><Link to="/memberarea">Member Area</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/downloadapp">Download App</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
