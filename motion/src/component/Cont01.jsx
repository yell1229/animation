import React,{useEffect} from 'react';


export default function Cont01() {
    
    useEffect(() => {
        
        setTimeout(()=>{
            const circle = document.querySelector('.overlay');
            const circle2 = document.querySelector('.overlay2');
            circle.classList.add('active');
            circle2.classList.add('active');
        },3000);

      }, []);

    return (
        <div className="cont cont01">
            <div className="txt_area">
                <div className="txt">
                    <p>Lorem ipsum dolor </p>
                    <p>for our sit amet consectetur.</p>
                </div>
            </div>
            <div className="txt_area overlay">
                <div className="txt">
                    <p>Lorem ipsum dolor </p>
                    <p>for our sit amet consectetur.</p>
                </div>
            </div>
            <div className="txt_area overlay2">
                <div className="txt">
                    <p>Lorem ipsum dolor </p>
                    <p>for our sit amet consectetur.</p>
                </div>
            </div>
        </div>
    );
}

