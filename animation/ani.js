window.addEventListener('load',()=>{

    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont02',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1,
            // markers:true
        }
    })
    // .to('.cont01',{'backgroundColor':'#fff','color':'#000'})
    .fromTo('.videoWrap video',{'clip-path':'inset(40% round 40%)'},{'clip-path':'inset(0% round 0%)', duration:'10', ease:'none'},0)

    // text
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont03',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.cont03 .title .a',{x:'-100%'},{x:'0%',ease:'none',duration:5},0)
    .fromTo('.cont03 .title .b',{x:'100%'},{x:'0%',ease:'none',duration:5},0)

    // workList
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont03 .workList',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            // markers:true
        }
    })
    .to('#wrap',{'backgroundColor':'#000','color':'#fff'})
    .to('.cont03 .title',{'position':'fixed','top':0,'left':0,'width':'100vw',ease:'none',duration:5},0)
    .fromTo('.cont03 .workList',{margin:'0 auto'},{margin:'100vh auto 0',position:'relative',zIndex:'10', duration:1},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont03 .workList',
            start:'100% 50%',
            end:'100% 0%',
            scrub:1,
            // markers:true
        }
    })
    .to('.cont03 .title .a',{x:'-100%',ease:'none',duration:5},0)
    .to('.cont03 .title .b',{x:'100%',ease:'none',duration:5},0)

    // slide
    const swiperWrapper = document.querySelector('.imgSwiper .swiper-wrapper');
    const swiperWrapper2 = document.querySelector('.imgSwiper2 .swiper-wrapper');
    const slides = document.querySelectorAll('.imgSwiper .swiper-slide');
    const totalSlide = slides.length;
    if(totalSlide < 12){
        const clones  = 12 - totalSlide;
        for(let i=0; i <clones; i++){
            const clone = slides[i % totalSlide].cloneNode(true);
            swiperWrapper.appendChild(clone);                   
            swiperWrapper2.appendChild(clone);                   
        }
    }

    var swiper = new Swiper(".imgSwiper", {
        slidesPerView: "auto", 
        spaceBetween: 0,
        loop: true,
        speed: 8000,
        autoplay: {
            delay: 1, 
            disableOnInteraction: false,
        },
        allowTouchMove: false, 
        loopAdditionalSlides: 5,
            });
    var swiper = new Swiper(".imgSwiper2", {
        slidesPerView: "auto", 
        spaceBetween: 0,
        loop: true,
        speed: 8000,
        autoplay: {
            delay: 1, 
            disableOnInteraction: false,
        },
        allowTouchMove: false, 
        loopAdditionalSlides: 5,
            });
}); // load event