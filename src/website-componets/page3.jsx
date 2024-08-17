import AboutIMG from "../assets/image-video/aboutimg.jpg"
import React from 'react';

export default function Page3(){


    return (
        <>
          <div className="page3">
            <img
              loading="lazy"
              src={AboutIMG}
            />
            <span>
                  <h2>About Us</h2>
                  <p>
                    REVOLUTION MULTI GYM is one of the biggest and best fitness centre in BARIPADA that provides a host of 
                    fitness-Related facilities to their members. REVOLUTION MULTI GYM is one of the best healthcare and 
                    body fitness centre for both men and women. We have all kind of advanced exercise equipment and experienced trainers.
                     We have the most skilled fitness trainers in the industry to help you reach your health goals in a time-bound 
                     manner. Our trainers provide you with a proper guide to help you achieve your goal in fitness. We take care of your
                      diet chart, weight training, personal training based on the client’s requirement. 
                      Even, We have customized membership packages to suit everyone. 
                      The parking facility is sufficient for its customers.
                  </p>
            </span>
          </div>
        </>
    );
}