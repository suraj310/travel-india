import React from 'react'
import './SelectsImgStyles.css'



function SelectsImg({bgImg, text,stext,link}) {

    return (
        
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
             <a href={link}><p>{text}</p></a>
                <h3>{stext}</h3>
            </div>
        </div>
    )
}

export default SelectsImg;
