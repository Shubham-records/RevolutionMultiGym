import Gymlogo from "../assets/image-video/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <nav className="menu">
                    <ul className="left-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/facilites">Facilities</Link></li>
                        <li><Link to="/memberarea">Member Area</Link></li>
                    </ul>
                    <img loading="lazy" src={Gymlogo} className="img" alt="Gym Logo"/>
                    <ul className="right-menu">
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/downloadapp">Download App</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
