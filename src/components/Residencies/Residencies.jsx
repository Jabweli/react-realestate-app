import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css"
import "./Residencies.css"
import { residencies } from '../../constants/slider';
import { slidersettings } from '../../constants/common';

const Residencies = () => {
  return (
    <section id="residencies" className="r-wrapper">
        <div className="innerWidth paddings r-container">
            <div className="flexColStart r-header">
                <span className='orangeText'>Best choices</span>
                <span className='primaryText'>Popular residencies</span>
            </div>

            <Swiper {...slidersettings}>
                <SliderButtons />
                {
                    residencies.map((card, i)=> (
                        <SwiperSlide key={i}>

                            <div className="flexColStart r-card">
                                <img src={card.image} alt="residence" />

                                <span className="secondaryText r-price">
                                    <span style={{color: "orange"}}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className="primaryText">{card.name}</span>
                                <span className="scondaryText">{card.detail}</span>
                            </div>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies


const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-buttons'>
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}