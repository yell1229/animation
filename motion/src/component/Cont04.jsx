import React, { useState, useEffect ,useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Cont04() {
    const cont04Ref = useRef(null);
    const swiper = {
        swiper1:useRef(null),
        swiper2:useRef(null)
    }
    const slides = [
        'images/img1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
        'images/img4.jpg',
        'images/img5.jpg',
        'images/img6.jpg',
        'images/img7.jpg',
        'images/img1.jpg',
        'images/img2.jpg',
        'images/img3.jpg',
        'images/img4.jpg',
        'images/img5.jpg'
    ];

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (cont04Ref.current && swiper.swiper1.current && swiper.swiper2.current) {
            // ScrollTrigger 설정
            gsap.timeline({
                scrollTrigger: {
                    trigger: cont04Ref.current,
                    start: '0% 100%',
                    scrub: 1,
                    toggleClass: { targets: cont04Ref.current, className: 'active' },
                    onEnter: () => {
                        // autoplay 시작
                        swiper.swiper1.current.swiper.autoplay.start();
                        swiper.swiper2.current.swiper.autoplay.start();
                    },
                    onLeaveBack: () => {
                        // autoplay 중지
                        swiper.swiper1.current.swiper.autoplay.stop();
                        swiper.swiper2.current.swiper.autoplay.stop();
                    },
                },
            });
        }
    }, [cont04Ref.current, swiper.swiper1.current, swiper.swiper2.current]);
    
    return (
        <div className="cont cont04" ref={cont04Ref}>
            <div className="textWrap">
                <ul>
                    <li>Lorem ipsum dolor </li>
                    <li>sit amet consectetur</li>
                    <li>adipisicing elit</li>
                    <li>Esse pariatur</li>
                    <li>ratione nisi officiis</li>
                </ul>
            </div>
            <Swiper
                modules = {[Autoplay]}
                spaceBetween={0}
                slidesPerView={'auto'}
                className="swiper imgSwiper"
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                loopAdditionalSlides={5}
                style={{ width: '100%'}}
                ref={swiper.swiper1}
            >
                {slides.map((img, idx) =>(
                    <SwiperSlide key={`slide-${idx}`}><img src={img} alt="" /></SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules = {[Autoplay]}
                spaceBetween={0}
                slidesPerView={'auto'}
                className="swiper imgSwiper2"
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                loopAdditionalSlides={5}
                ref={swiper.swiper2}
            >
                {slides.map((img, idx) => (
                    <SwiperSlide key={`slide2-${idx}`}>
                        <img src={img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

