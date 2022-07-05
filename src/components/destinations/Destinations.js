import React from 'react'
import './DestinationsStyles.css'
import VARANASHI from '../../Picture/VARANASHI.jpg';
import Dudhsagar from '../../Picture/Dudhsagar.jpg';
import HAWA from '../../Picture/HAWA.png';
import Ooty from '../../Picture/Ooty.jpg';
import KEDAR from '../../Picture/KEDAR.jpg';

import SelectsImg from '../SelectsImg/SelectsImg';

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Tourists Places</h1>
                <p> India's Best Tourists Places</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={VARANASHI} alt="/" text='Ganges Ghat'/>
                      {/* <img src={HAWA} alt="/"/> */}
                    
                    <SelectsImg  bgImg={KEDAR}  stext='Kedarnath Temple' />
                    <SelectsImg bgImg={HAWA}  stext='Hawa Mahal,Jaipur' />
                    <SelectsImg bgImg={Ooty} stext='Kalka Shimla Toy Train' />
                    <SelectsImg bgImg={Dudhsagar}  stext='Dudhsagar Water Falls' /> 
                     
                </div>
            </div>
        </div>
    )
}

export default Destinations
