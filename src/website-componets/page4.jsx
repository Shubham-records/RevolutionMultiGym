import maplogo from '../assets/image-video/map-marker-4-svgrepo-com.svg';
import calllogo from '../assets/image-video/call-192-svgrepo-com.svg';
import maillogo from '../assets/image-video/mail-svgrepo-com.svg';
import clocklogo from '../assets/image-video/clock-five-svgrepo-com.svg';



export default function Page4(){
      

    return (
        <>
          <div className="page4">
              <div class="info-box">
                  <img type="image/svg+xml" src={maplogo} style={{ height: "1.5rem" }}/>
                  <h3>Address</h3>
                  <p>Puruna Hatasahi,<br/> behind SBI bank Main branch,<br/> Baripada, Odisha
                  757001</p>
              </div>
              <div class="info-box">
                  <img src={calllogo} style={{ height: "1.5rem" }}/>
                  <h3>Phone</h3>
                  <p>+91 7008976481<br/>+91 9556966060</p>
              </div>
              <div class="info-box">
                  <img src={maillogo} style={{ height: "1.5rem" }}/>
                  <h3>Email</h3>
                  <p>revolutionmultigym@gmail.com</p>
              </div>
              <div class="info-box">
                  <img src={clocklogo} style={{ height: "1.5rem" }}/>
                  <h3>Opening Times</h3>
                  <p>Monday - Saturday:<br/> 5AM - 10:30PM 3PM - 10:30PM</p>
              </div>
          </div>
        </>
    );
}

