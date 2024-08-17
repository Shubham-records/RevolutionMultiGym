import strength from '../assets/image-video/strength.png';
import cardioCrossfit from '../assets/image-video/cardio-crossfit.png';
import zumba from '../assets/image-video/zumba.png';
import yoga from '../assets/image-video/yoga.png';

export default function Page8(){

  const ListCarusalIMG1 = [
    {
      title:"Strength",
      img: `${strength}`,
    },
    {
      title:"Cardio+Crossfit",
      img: `${cardioCrossfit}`,
    },
  ]
  const ListCarusalIMG2 = [
    {
      title:"Zumba",
      img: `${zumba}`,
    },
    {
      title:"Yoga",
      img: `${yoga}`,
    },
  ]
    return (
        <>
          <div className="page8" style={{display: "grid", gridTemplateColumns: "0.5fr 1fr", justifyItems: "center",padding: "6rem 4rem"}}>
            <div className="page8Services" style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
              <h2 style={{fontSize:"3rem"}}>Our Services</h2>
              <p style={{width:"90%", margin:0, textAlign:"justify"}}>
                  As the largest health brand in Baripada, Mayurbhanj. The Fitness &
                  Yoga is built to bring happiness and fulfilling moments to
                  your life by provtitleing holistic physical, nutritional, and
                  mental health development services.
              </p>
            </div>
            <div className="Servicesimg" style={{display:"flex",}}>
              <div style={{margin:"3rem"}}>
                {ListCarusalIMG1.map((Imgtitle)=>(
                  <>
                  <span key={Imgtitle.title}>
                    <img src={Imgtitle.img} alt=""/>
                    <h2>{Imgtitle.title}</h2>
                  </span>
                  </>
                  
                ))
                }
              </div>
              <div>
              {ListCarusalIMG2.map((Imgtitle)=>(
                  <>
                  <span key={Imgtitle.title}>
                    <img src={Imgtitle.img} alt=""/>
                    <h2>{Imgtitle.title}</h2>
                  </span>
                  </>
                  
                ))
                }
              </div>
            </div>
            </div>
          
        </>
    )
}