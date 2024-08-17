import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import React from 'react';
import GoogleLogo from '../assets/image-video/Google-Logo.png';
import GoogleLogoShort from '../assets/image-video/google-logo-search-new-svgrepo-com.svg';
import verifiedBadge from '../assets/image-video/verifiedBadge.png';




export default function Page9(){

  const [readMoreStates, setReadMoreStates] = useState({});


  function handleReadMore(name) {
    setReadMoreStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  }
  
  const charLimit = 150;

  const ListCarusal = [
    {
      name:"Grassroot Vlogger",
      date:"2 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjX7rBctfXB0f5QtGCw0tjKuH1bSmY6xbQsnkmzQk1DuTlGJIeEW=w45-h45-p-rp-mo-ba6-br100`,
      review: "Revolution multi gym is one of the best gym in Baripada. You will get cleaned surface, Air Condition hall with latest instruments for fitness. Trainers are well trained and they all are very much cooperative. I would suggest if you are looking for a gym then you must visit Revolution Gym. Thank you. Jay Jagannath 🙏."
    },
    {
      name:"Abhipsa Pattanayak",
      date:"2 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjV5bUu03S_Tbd7ZXiBjjafJ-Q2G-RfO_438u5Z4JfTd0uOyEkxx=w45-h45-p-rp-mo-br100`,
      review: "I have been to so many gyms, across India, but TBH, no other gym provides women with such professional approach like Revolution multi gym does. The trainers here are very cooperative and so are other members. You won't regret joining this gym, I assure."
    },
    {
      name:"Samuel Paul",
      date:"2 months ago",
      img: `https://lh3.googleusercontent.com/a/ACg8ocKuRKnRXq_KujtlUwucPeTF9k8tGTOOjO4BmYEVDdQONaI8RsQ=w45-h45-p-rp-mo-ba4-br100`,
      review: "We'll maintained equipments.... Good trainers... Affordable fee, you'll enjoy your workouts...."
    },
    {
      name:"Debjani Acharya",
      date:"2 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjXFOrQSiwFxd9unRDlugryGtUmWbwROwV_MrS-HEktdCHlvfxun0Q=w45-h45-p-rp-mo-br100`,
      review: "Great gym. The trainers are well trained and they help you with your body goal."
    },
    {
      name:"smruti sswain",
      date:"3 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjUKI9NksOSJOdQuK2FhlkxT4mOvQaT-0HUvPQikhizu-YzjTcfq=w45-h45-p-rp-mo-br100`,
      review: "It's a place where you can find a best range of equipments (enough for a fully functional gym) & Trainers are good & supportive.I like to recommend my friends,If you're searching for the top gym in Baripada ,then revolution is one of your best choice👌🏻 …"
    },
    {
      name:"Jyotirmaya Patra",
      date:"3 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjWTb8VFsS3FGt7ZlrucM5HhoJ6i1R-WvokL1DH6Elajd_Q3qMtDuw=w45-h45-p-rp-mo-br100`,
      review: "Best among all gyms in the locality"
    },
    {
      name:"BIKASH BEHERA",
      date:"3 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjWUzcK9vTO6vnP_TrXg6LfF6ZlukgOxsYNyUy2HX8YeJxXKqpcrtg=w45-h45-p-rp-mo-ba4-br100`,
      review: "Best gym for College students in Baripada."
    },
    {
      name:"Suchismita Sahu",
      date:"3 months ago",
      img: `https://lh3.googleusercontent.com/a-/ALV-UjUMAnUxikHlQT9_Ks5F-00yV54o_Nir4sFt8nR7Xj6ZiiGMpg8=w45-h45-p-rp-mo-br100`,
      review: "They protize women privacy, well trained trainers, varatiy of equipments, they help me to lose weight 6kg in 2 months period, thank you revolution gym"
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };
  

    return (
        <section className="page9">
            <div>
                <div className="google-rating">
                  <span style={{display: "flex", gap: "1rem", alignItems: "center"}}>
                    <div className="rating-container">
                        <div className="google">Excellent</div>
                        <span style={{alignItems: "center", display: "flex"}}>
                          <div className="rating-text" style={{color:"#d97707"}}>5.0</div>
                          <p style={{color:"#fabd05", margin:0,fontSize: "20px"}}>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                        </span>
                    </div>
                    <div className="Review_container">
                      <img  style={{height:"2rem"}} src={GoogleLogo}/>
                      <p style={{fontWeight: 500}} className="reviews-link">Based on <strong style={{fontWeight: "bold"}}>512</strong> reviews</p>
                    </div>
                  </span>
                  <div>
                    <button style={{backgroundColor:"#2563e8", borderColor:"transparent", borderRadius:"4px",padding:"6px", color:"#e4e7ed  ", fontSize: "18px"}}>
                      <a style={{fontWeight: 500}} href="https://www.google.co.in/maps/place/Revolution+Multi+Gym,+Baripada/@21.9334423,86.726175,17z/data=!4m8!3m7!1s0x3a1db1ed6ecec1d9:0xb333e0ed91f2a20b!8m2!3d21.932681!4d86.7231251!9m1!1b1!16s%2Fg%2F11bwkb3j5f?entry=ttu" target="_blank" rel="noopener noreferrer">
                        Write a Review
                      </a>
                      </button>
                  </div>
                  
              </div>
              
            </div>
						<div className="carusalcard" style={{padding: "0rem 15rem"}}>
              <Slider {...settings}>
              {ListCarusal.map((googlereviews)=>(
                <div className= {readMoreStates[googlereviews.name] ? "conditionedCard" :  "unconditionedCard"} key={googlereviews.name}>
                  <span style={{alignItems: "center", display: "flex", justifyContent:"space-between", margin: "1rem auto 0",width: "90%"}}>
                    <div className="User-Rating-Date">
                      <img className="reviewer__img" src={googlereviews.img}/>
                      <div className="reviewer__container" >
                        <p id="UserName" style={{fontWeight: 600, fontSize:"14px", margin:0, textAlign: "left"}}>{googlereviews.name}</p>
                        <p style={{margin:0, textAlign: "left", fontWeight: 500, fontSize:"10px", color:"#969696"}}>{googlereviews.date}</p>
                      </div>
                    </div>
                    <img style={{width:"2rem",height:"2rem"}} src={GoogleLogoShort}/>
                  </span>
                  <div className="reviewFooter" style={{alignItems: "center", display: "inline-flex", margin: "0.5rem 1rem"}}>
                    <p style={{color:"#fabd05", margin:0,fontSize: "20px"}}>
                        <span className="full-star">&#9733;</span>
                        <span className="full-star">&#9733;</span>
                        <span className="full-star">&#9733;</span>
                        <span className="full-star">&#9733;</span>
                        <span className="half-star">&#9733;</span>
                    </p>
                    <img style={{height:"15px"}} src={verifiedBadge}/>
                  </div>
                  <div className="review">
                    <p  style={{
                          WebkitLineClamp: readMoreStates[googlereviews.name] ? "unset" : "3",
                          WebkitBoxOrient: "vertical",
                          overflow:"hidden",
                          display:"-webkit-box",
                          fontFamily: "Open Sans , sans-serif"
                        }}>{googlereviews.review}</p>


                  {googlereviews.review.length > charLimit && (
                  <button style={{
                          backgroundColor: "transparent",
                          border: 0,
                          margin: "10px 0px",
                          padding: 0,
                          fontWeight: 600,}}
                    onClick={() => handleReadMore(googlereviews.name)}>
                    {readMoreStates[googlereviews.name]? "Read Less": "Read More..."}
                  </button>
                )}
                  </div>
                  
                </div>
                ))
              }
              </Slider>
            </div>
        </section>
    )
}