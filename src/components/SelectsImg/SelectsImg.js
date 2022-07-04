import React from 'react'
import './SelectsImgStyles.css'

function SelectsImg({bgImg, text,stext}) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
                <h3>{stext}</h3>
            </div>
        </div>
    )
}

export default SelectsImg
