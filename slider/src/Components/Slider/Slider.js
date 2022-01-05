import {useState} from 'react';
import './Slider.css';
import dataSlider from './dataSlider';

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index: 0,
        inProgress: false
    })

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
        </div>
    )
}
