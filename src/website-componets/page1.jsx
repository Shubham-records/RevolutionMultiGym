import Page1Video from "../assets/image-video/gym_background_video.mp4"
import { Link } from "react-router-dom";
export default function Page1(){

    return (
        <>
        <div id="container" className="page1" >
          <video loading="lazy" autoPlay loop muted><source src={Page1Video} type="video/mp4"/></video>
          <span style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <h2 style={{fontFamily: "Archivo Black, sans-serif",fontWeight: 400,fontStyle: "normal", fontSize:"5rem", textTransform:"uppercase" , margin:"0"}}>
                Transform Your Fitness Journey
              </h2>
              <p>
                Looking to get started?
                <br/>
                <br/>
              </p>
              <button><Link alt="" to="/contactus">contact us</Link></button>
          </span>
        </div>
        </>
    );
}