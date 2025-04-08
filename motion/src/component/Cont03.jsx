import React,{useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Con03() {
    gsap.registerPlugin(ScrollTrigger);

    const cont03Ref = useRef(null);
    const workListRef = useRef(null);

    const imgs = {
        img01Ref:useRef(null),
        img02Ref:useRef(null),
        img03Ref:useRef(null),
        img04Ref:useRef(null),
        img05Ref:useRef(null),
        img06Ref:useRef(null)
    }
    const title = {
        titleWrap:useRef(null),
        titleA:useRef(null),
        titleB:useRef(null)
    }
    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:cont03Ref.current,
                start:'0% 100%',
                end:'0% 20%',
                scrub:1,
                // markers:true
            }
        })
        .fromTo(title.titleA.current,{x:'-100%'},{x:'0%',ease:'none',duration:5},0)
        .fromTo(title.titleB.current,{x:'100%'},{x:'0%',ease:'none',duration:5},0)

        gsap.timeline({
            scrollTrigger:{
                trigger:workListRef.current,
                start:'0% 100%',
                end:'0% 100%',
                scrub:1,
                // markers:true
            }
        })
        .to('#wrap',{'backgroundColor':'#000','color':'#fff'})
        .to('header .btn span',{'background-color':'#fff'})
        .to(title.titleWrap.current,{'position':'fixed','top':0,'left':0,'width':'100vw',ease:'none',duration:5},0)
        .fromTo(workListRef.current,{margin:'0 auto'},{margin:'100vh auto 0',position:'relative',zIndex:'10', duration:1},0)
    
        gsap.timeline({
            scrollTrigger:{
                trigger:workListRef.current,
                start:'100% 50%',
                end:'100% 0%',
                scrub:1,
                // markers:true
            }
        })
        .to(title.titleA.current,{x:'-100%',ease:'none',duration:5},0)
        .to(title.titleB.current,{x:'100%',ease:'none',duration:5},0)
    },[]);

    return (
        <div className="cont cont03" ref={cont03Ref}>
            <div className="title" ref={title.titleWrap}>
                <p className="a" ref={title.titleA}>My</p>
                <p className="b" ref={title.titleB}>Work</p>
            </div>
            <ul className="workList" ref={workListRef}>
                <li ref={imgs.img01Ref}><img src="./images/work1.jpg" alt="" /></li>
                <li ref={imgs.img02Ref}><img src="./images/work2.jpg" alt="" /></li>
                <li ref={imgs.img03Ref}><img src="./images/work3.jpg" alt="" /></li>
                <li ref={imgs.img04Ref}><img src="./images/work4.jpg" alt="" /></li>
                <li ref={imgs.img05Ref}><img src="./images/work5.jpg" alt="" /></li>
                <li ref={imgs.img06Ref}><img src="./images/work6.jpg" alt="" /></li>
            </ul>
        </div>
    );
}

