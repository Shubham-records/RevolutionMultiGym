import strength from '../assets/image-video/strength.jpg';
import cardioCrossfit from '../assets/image-video/cardio.jpg';
import zumba from '../assets/image-video/zumba.jpg';
import yoga from '../assets/image-video/yoga.jpg';

export default function Page8(){

  const serviceCarddata1 = [
    {
      title:"Strength Training",
      img: `${strength}`,
      dis : "Strength training builds muscle and promotes healthy weight gain by using resistance exercises. It strengthens muscles, improves metabolism, and enhances overall fitness when combined with a protein-rich diet."
    },
    {
      title:"Cardio + Crossfit",
      img: `${cardioCrossfit}`,
      dis : "Cardio exercises are key for weight loss and maintaining a healthy lifestyle. They increase heart rate, burn calories, and improve cardiovascular health, making them effective for shedding excess weight and boosting overall fitness. Regular cardio helps manage body weight, reduces stress, and enhances energy levels."
    },
  ]
  const serviceCarddata2 = [
    {
      title:"Zumba",
      img: `${zumba}`,
      dis : "Zumba is a fun, high-energy workout that blends dance with cardio, making it effective for weight loss. By combining rhythmic movements with music, Zumba burns calories, improves cardiovascular fitness, and boosts mood, all while making exercise enjoyable. "
    },
    {
      title:"Yoga",
      img: `${yoga}`,
      dis : "Yoga promotes weight loss, flexibility, and mental well-being. It combines physical postures with breathing exercises, reducing stress while enhancing strength and balance."
    },
  ]
    return (
        <>
          <div className="page8" style={{display: "flex", flexDirection: "column", justifyItems: "center",padding: "6rem 0 0 0"}}>
            <h2 style={{fontSize:"3rem"}}>Our CLASSES</h2>
            <div className="Servicesimg" style={{display:"flex", justifyContent: "space-evenly",}}>
              <div>
                {serviceCarddata1.map((serviceCard)=>(
                  <>
                  <span style={{width:"40rem", display:"block", padding: "1.5rem 0"}} key={serviceCard.title}>
                    <img src={serviceCard.img} alt=""/>
                    <p className='serviceCardtitle'>{serviceCard.title}</p>
                    <p className='serviceCarddis'>{serviceCard.dis}</p>
                  </span>
                  </>
                  
                ))
                }
              </div>
              <div>
              {serviceCarddata2.map((serviceCard)=>(
                  <>
                  <span style={{width:"40rem", display:"block", padding: "1.5rem 0"}} key={serviceCard.title}>
                    <img src={serviceCard.img} alt=""/>
                    <p className='serviceCardtitle'>{serviceCard.title}</p>
                    <p className='serviceCarddis'>{serviceCard.dis}</p>


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