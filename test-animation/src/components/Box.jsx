import React,{useEffect, useRef} from 'react';
import '../scss/box.scss';

export default function Box() {
    const mouseRef = useRef();
    const wrapRef = useRef();
    const handleClick = (e) => {
        console.log(e.clientX);
        mouseRef.current.style.left = e.clientX+'px';
        mouseRef.current.style.top = e.clientY+'px';
    }
    useEffect(() =>{
        // window.addEventListener('scroll',function(){
        //     console.log(this.window.pageYOffset);
            
        // });
        mouseRef.current.addEventListener('transitionstart',function(){
            this.classList.add('start');    
        })
        mouseRef.current.addEventListener('transitionend',function(){
            this.classList.add('end');    
        })
    },[]);
    return (
        <div className="wrap" onClick={handleClick} ref={wrapRef}>
            <div className="mouse" ref={mouseRef}></div>
            <div className="boxWrap">
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
                <div className="box">5</div>
                <div className="box">6</div>
            </div>
            <div className="move">
                <div className="box">head</div>
                <div className="box">body</div>
            </div>
        </div>
    );
}

