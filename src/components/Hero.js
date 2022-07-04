
import React from "react";
import './Hero.css';

import tajmahal from '../Picture/tajmahal.jpg';
// import tajmahal from '../Picture/tajmahal';




function Hero(){
    return (

        <div name='views' className='selects'>
            
                <Hero bgImg={tajmahal} text='Bora Bora' />
                {/* <Hero bgImg={tajmahal} text='Emerald Bay' /> */}
              
        </div>

    
    
    );
}
export default Hero;