import React,{useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Cont06() {
    gsap.registerPlugin(ScrollTrigger);

    const cont06Ref = useRef(null);
    const txt = {
        txt01Ref:useRef(null),
        txt02Ref:useRef(null),
        txt03Ref:useRef(null),
        txt04Ref:useRef(null),
        txt05Ref:useRef(null),
        txt06Ref:useRef(null),
        txt07Ref:useRef(null)
    }

    useEffect(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:cont06Ref.current,
                start:'0% 100%',
                end:'+=5000',
                pin:true,
                anticipatePin:1,
                scrub:true,
                markers:true
            }
        })
        .from(txt.txt01Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt02Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt03Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt04Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt05Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt06Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)
        .from(txt.txt07Ref.current,{y:'150',autoAlpha:1, duration:1}, 1)

    },[]);
    // console.log(cont06Ref.current);
    // console.log(txt.txt01Ref.current);
    
    return (
        <div className="cont cont06" ref={cont06Ref} style={{border:'5px solid red'}}>
            <div className="txt t1" ref={txt.txt01Ref}>Lorem ipsum dolor sit</div>
            <div className="txt t2" ref={txt.txt02Ref}>amet consectetur adipisicing elit.</div>
            <div className="txt t3" ref={txt.txt03Ref}>Suscipit repellat earum,</div>
            <div className="txt t4" ref={txt.txt04Ref}>vel aliquam ratione sequi</div>
            <div className="txt t5" ref={txt.txt05Ref}> quibusdam, ducimus possimus</div>
            <div className="txt t6" ref={txt.txt06Ref}>doloremque inventore </div>
            <div className="txt t7" ref={txt.txt07Ref}>Ab dolore exercitationem nisi saepe expedita.</div>
        </div>
    );
}

