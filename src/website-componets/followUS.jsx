import React from 'react'
import instalogo from '../assets/image-video/instagram-svgrepo-com.svg';
import fblogo from '../assets/image-video/facebook-svgrepo-com.svg';
import ytlogo from '../assets/image-video/youtube-168-svgrepo-com.svg';
export default function FollowUS() {
  
    return (
      <div className="followus" style={{color:"#000", backgroundColor:"#fff", justifyContent:"center", alignItems:"center", gap:"1rem", padding:"1rem", display:"flex"}}>
        <h4>
            FOLLOW US ON @REVOLUTION MULTI GYM
        </h4>
        <span style={{display:"inline-flex", gap:"1rem", alignItems: "center"}}>
            <a><img src={instalogo} alt=''/></a>
            <a><img src={fblogo} alt=''/></a>
            <a><img style={{height:"2rem"}} src={ytlogo} alt=''/></a>
        </span>
      </div>
    )
  
}
