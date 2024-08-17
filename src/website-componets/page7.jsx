import karan from '../assets/image-video/karan.png';
import dev from '../assets/image-video/dev.png';
import swagat from '../assets/image-video/swagat.png';
import omm from '../assets/image-video/omm.png';



export default function Page7(){

  const ListCarusalIMG = [
    {
      id:1,
      img: `${karan}`,
    },
    {
      id:2,
      img: `${dev}`,
    },
    {
      id:3,
      img: `${swagat}`,
    },
    {
      id:4,
      img: `${omm}`,
    },
    
  ]

    

    return (
        <>
        <div className="page7">
          <h2>Our Coach’s</h2>
          
          <div className="page7IMG">
            {ListCarusalIMG.map((Imgid)=>(
                
                <span key={Imgid.id}>
                <img src={Imgid.img} alt=""/>
                </span>
                
                ))
            }
          </div>
        </div>
        </>
    )
}