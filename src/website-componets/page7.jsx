import karan from '../assets/image-video/karan.png';
import dev from '../assets/image-video/dev.png';
import swagat from '../assets/image-video/swagat.png';
import omm from '../assets/image-video/omm.png';



export default function Page7(){

  const ListCarusalIMG = [
    {
      id:1,
      img: `${karan}`,
      name: "karan",
    },
    {
      id:2,
      img: `${dev}`,
      name: "debasish",
    },
    {
      id:3,
      name: "swagat",
      img: `${swagat}`,
    },
    {
      id:4,
      name: "omm",
      img: `${omm}`,
    },
    
  ]

    

    return (
        <>
        <div className="page7" style={{padding:"5rem 0"}}>
          <h2>OUR TEAM</h2>
          
          <div className="page7IMG">
            {ListCarusalIMG.map((Imgid)=>(
                
                <span class="container" key={Imgid.id}>
                  <img src={Imgid.img} alt=""/>
                  <span class="overlay">
                    <h4 >COACH</h4>
                    <p >{Imgid.name}</p>
                  </span>
                </span>
                
                
                ))
            }
          </div>
          
        </div>
        </>
    )
}