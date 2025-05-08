import './Carousel.scss'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import { useState } from "react";

function Carousel({ data }) {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1? 0 : slide + 1);
    };

    const previousSlide = () => {
        setSlide(slide === 0? data.length -1 : slide - 1);
    };

    return (
        <>
        <div className="carousel">
            <BsArrowLeftCircleFill className='arrow arrow--left' onClick={previousSlide}/>
           {data.map((image, i) => (
                    <img className={`${slide === i? "carousel__image" : "carousel__image carousel__image--hidden"}`} key={i} src={image.src} alt={image.alt} />
                ))
                } 
            <BsArrowRightCircleFill className='arrow arrow--right' onClick={nextSlide}/> 
            <span className='indicators'>
                {data.map((_, i) => {
                    return <button className={`${slide === i? 'indicator' : 'indicator indicator--inactive'}`} key={i} onClick={() => setSlide(i)}></button>
                })}
            </span>
        </div>
        </>
    )
}

export default Carousel