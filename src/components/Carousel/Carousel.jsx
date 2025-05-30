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
           {data.map((item, i) => {
               return item.type === 'image' ? (
                    <img className={`${slide === i? "carousel__image" : "carousel__image carousel__image--hidden"}`} key={i} src={item.src} alt={item.alt} />
                ) : (
                    <video className={`${slide === i? "carousel__video" : "carousel__video carousel__video--hidden"}`} key={i} src={item.src} controls></video>
                );
            })}
            <BsArrowLeftCircleFill className='arrow arrow--left' onClick={previousSlide}/>
            <span className='indicators'>
                {data.map((_, i) => {
                    return <button className={`${slide === i? 'indicator' : 'indicator indicator--inactive'}`} key={i} onClick={() => setSlide(i)}></button>
                })}
            </span>
            <BsArrowRightCircleFill className='arrow arrow--right' onClick={nextSlide}/> 
        </div>
        </>
    )
}

export default Carousel