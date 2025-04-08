import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function Cont05() {
    const cont05Ref = useRef(null);
    const popolArea = useRef(null);
    const txtMotionRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        const splitText = new SplitType(txtMotionRef.current, { types: 'chars' });

        gsap.timeline({
            scrollTrigger:{
                trigger:cont05Ref.current,
                start: 'top+=80 100px',
                end:'+=2000',
                scrub:true,
                pin:true,
                anticipatePin:1, // pin을 부드럽게
                markers:true,
                // onLeave: (self) => {
                // //self.scroll(self.start); // 스크롤을 시작 지점에서 멈추도록 설정
                // setTimeout(() => self.enable(), 2000); // 2초 후 다시 스크롤 가능
                // }
            }
        })
        .to(popolArea.current ,{'x':'-65vw','duration':'10','ease':'easeInOut'},4)
        .to('.cont05 .img_area ul:nth-child(even)',{'y':'-15vh','duration':'10','ease':'none'},4)
        .to('.cont05 .img_area ul:nth-child(odd)',{'y':'15vh','duration':'10','ease':'none'},4)
        .to(splitText.chars,{y:'0', duration:0.3, ease:'ease-in',stagger: 0.2},0)

    },[]);
    
    return (
        <div className="cont cont05" ref={cont05Ref}>
            <div className="popol_area" ref={popolArea}>
                <div className="txt_area"><h2 className="txt_motion" ref={txtMotionRef}>Lorem ipsum dolor sit.</h2></div>
                <div className="img_area">
                    <ul>
                        <li><img src="./images/work1.jpg" alt="" /></li>
                        <li><img src="./images/work2.jpg" alt="" /></li>
                        <li><img src="./images/work3.jpg" alt="" /></li>
                        <li><img src="./images/work4.jpg" alt="" /></li>
                    </ul>
                    <ul>
                        <li><img src="./images/work5.jpg" alt="" /></li>
                        <li><img src="./images/work6.jpg" alt="" /></li>
                        <li><img src="./images/work1.jpg" alt="" /></li>
                        <li><img src="./images/work2.jpg" alt="" /></li>
                    </ul>
                    <ul>
                        <li><img src="./images/work3.jpg" alt="" /></li>
                        <li><img src="./images/work4.jpg" alt="" /></li>
                        <li><img src="./images/work5.jpg" alt="" /></li>
                        <li><img src="./images/work6.jpg" alt="" /></li>
                    </ul>
                    <ul>
                        <li><img src="./images/work1.jpg" alt="" /></li>
                        <li><img src="./images/work2.jpg" alt="" /></li>
                        <li><img src="./images/work3.jpg" alt="" /></li>
                        <li><img src="./images/work4.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

