import {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 0,
        inProgress: false
    })

    const nextSlide = () => {

    }

    const prevSlide = () => {
        
    }

    return (
        <div className='container-slider'>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index ? "slide active-anim" : "slide"}
                    >
                        <img src={process.env.PUBLIC_URL + `/Img/img${index + 1}.jpg`} alt="" />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={'next'}/>
            <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
        </div>
    )
}
