import Page1Video from "../assets/image-video/gym_background_video.mp4"
import { Link } from "react-router-dom";
export default function Page1(){

    return (
        <>
        <div id="container" className="page1" >
          <video loading="lazy" autoPlay loop muted><source src={Page1Video} type="video/mp4"/></video>
          <span >
              <h2 className="transformYourFitnessJourney">
                Transform Your
                <br />
                Fitness Journey
              </h2>
              <p>
                We're here to provide our customers with the highest quality of
                service. With our dedication to customer satisfaction, you can rest
                assured that you will have a great experience.
              </p>
              <button><Link alt="" to="/contactus">contact us</Link></button>
          </span>
        </div>
        </>
    );
}