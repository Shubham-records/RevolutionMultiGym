import Gymlogo from "../assets/image-video/logo.png"

import { Link } from "react-router-dom";

export default function Header(){


    return (
        <>
            <header>
                <img style={{padding: "0px 35px"}} loading="lazy" src={Gymlogo} className="img"/>
                <nav style={{padding: "0px 20px"}}>
                    <ul style={{float:"right"}} className="menu">
                        <li><Link alt="" to="/">Home</Link></li>
                        <li><Link alt="" to="/facilites">Facilites</Link></li>
                        <li><Link alt="" to="/gallery">Gallery</Link></li>
                        <li><Link alt="" to="/blog">Blog</Link></li>
                        <li><Link alt="" to="/contactus">Get In touch</Link></li>
                        <li><Link alt="" to="/downloadapp">Download App</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}