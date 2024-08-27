export default function Facilites(){

    const Facilitescard1 = [
        {
          title:"Certified Trainers",
          p: "Our RMG facilities boast certified trainers dedicated to maximising your fitness potential, ensuring safe and effective workouts tailored to your needs.",
        },
        {
          title:"Personal Training",
          p: "Experience personalised fitness plans and one-on-one attention from our expert trainers, guiding you towards your fitness goals with individualised support and motivation.",
        },
      ]
      const Facilitescard2 = [
        {
          title:"Modern Updated Equipments",
          p: "Enhanced with premium machinery and cutting-edge, advanced technology, our facilities provide you with the latest in fitness equipment for an optimised workout experience.",
        },
        {
          title:"Most Hygienic Gym",
          p: "Maintaining the highest standards of cleanliness and hygiene, providing you with a safe and healthy environment to pursue your fitness goals."
        },
      ]

    return (
      <>
        <div className="Facilites">
          <div style={{display:"flex"}}>
            {Facilitescard1.map((card) => (
              <>
                <div className="Facilites-card" key={card.title}>
                  <h3 className="Facilites-card-title">{card.title}</h3>
                  <p className="Facilites-card-text">{card.p}</p>
                </div>
              </>
            ))}
          </div>
          <div style={{display:"flex"}}>
            {Facilitescard2.map((card) => (
              <>
                <div className="Facilites-card" key={card.title}>
                  <h3 className="Facilites-card-title">{card.title}</h3>
                  <p className="Facilites-card-text">{card.p}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
}