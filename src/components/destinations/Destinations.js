import React from 'react'
import './DestinationsStyles.css'
import VARANASHI from '../../Picture/VARANASHI.jpg';
import Dudhsagar from '../../Picture/Dudhsagar.jpg';
import AMRITSAR from '../../Picture/AMRITSAR.jpg';
import HAWA from '../../Picture/HAWA.png';
import Kalka from '../../Picture/Kalka.jpg';

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Tourists Places</h1>
                <p>On the India's Best Tourists Places</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={VARANASHI} alt="/" text='Ganges Ghat'/>
                     <img src={HAWA} alt="/"/>
                    <img src={AMRITSAR} alt="/"/>
                    <img src={Dudhsagar} alt="/"/>
                    <img src={Kalka} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
