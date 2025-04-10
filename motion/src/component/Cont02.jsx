import React,{useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cont02() {
    gsap.registerPlugin(ScrollTrigger);

    const cont02Ref = useRef(null);
    const videoRef = useRef(null);

    useLayoutEffect (()=>{

        gsap.timeline({
            scrollTrigger:{
                trigger:cont02Ref.current,
                start:'0% 80%',
                end:'100% 100%',
                scrub:1,
                snap: 1,
                // markers:true
            }
        })
        // .to('header',{'color':'#fff'})
        .fromTo(videoRef.current,{'clip-path':'inset(40% round 40%)'},{'clip-path':'inset(0% round 0%)', duration:'10', ease:'none'},0)
    
        // gsap.timeline({
        //     scrollTrigger:{
        //         trigger:cont02Ref,
        //         // start:'100% 0%',
        //         end:'0% 0%',
        //         scrub:1,
        //         // markers:true
        //     }
        // })
        // .to('header',{'color':'#fff'})
        // .to('header .btn span',{'background-color':'#fff'})
    },[]);

    return (
        <div className="cont cont02" ref={cont02Ref}>
            <div className="videoWrap">
                <video autoPlay="" muted="" loop="" playsInline ="" ref={videoRef}><source src="./images/main2.mp4" type="video/mp4" /></video>
            </div>
            <div className="title en">
                <h2><span className="en2">Creativeness</span>is all you need<br />for<span>digital design</span></h2>
            </div>
        </div>
    );
}

