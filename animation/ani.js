window.addEventListener('load',()=>{

    gsap.registerPlugin(ScrollTrigger);
    const txt = new SplitType('.txt_motion');
    // circle
    setTimeout(()=>{
        const circle = document.querySelector('.overlay');
        const circle2 = document.querySelector('.overlay2');
        circle.classList.add('active');
        circle2.classList.add('active');
    },3000);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont02',
            start:'0% 80%',
            end:'100% 100%',
            scrub:1,
            // markers:true
        }
    })
    // .to('header',{'color':'#fff'})
    .fromTo('.videoWrap video',{'clip-path':'inset(40% round 40%)'},{'clip-path':'inset(0% round 0%)', duration:'10', ease:'none'},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont02',
            // start:'100% 0%',
            end:'0% 0%',
            scrub:1,
            markers:true
        }
    })
    .to('header',{'color':'#fff'})
    .to('header .btn span',{'background-color':'#fff'})

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
    .to('header .btn span',{'background-color':'#fff'})
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


    // cont04 
    // slide
    let swiper1 = null;
    let swiper2 = null;
    const swiperWrapper = document.querySelector('.imgSwiper .swiper-wrapper');
    const swiperWrapper2 = document.querySelector('.imgSwiper2 .swiper-wrapper');
    const slides = document.querySelectorAll('.imgSwiper .swiper-slide');
    const totalSlide = slides.length;
    if(totalSlide < 12){
        const clones  = 12 - totalSlide;
        for(let i=0; i <clones; i++){
            const clone = slides[i % totalSlide].cloneNode(true);
            const clone2 = clone.cloneNode(true);
            swiperWrapper.appendChild(clone);                   
            swiperWrapper2.appendChild(clone2);                   
        }
    }

    swiper1 = new Swiper(".imgSwiper", {
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
    swiper1.autoplay.stop();

    swiper2 = new Swiper(".imgSwiper2", {
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
    swiper2.autoplay.stop();


    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont04',
            start:'0% 100%',
            // end:'100% 100%',
            scrub:1,
            toggleClass:{'targets':'.cont04', className:'active'},
            // markers:true,
            onEnter: () => {
                swiper1.autoplay.start();
                swiper2.autoplay.start();
            },
            onLeaveBack: () => {
                swiper1.autoplay.stop();
                swiper2.autoplay.stop();
            }
        }
    })

    // 05
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont05',
            start: 'top+=80 100px',
            end:'+=2000',
            scrub:true,
            pin:true,
            anticipatePin:1 // pin을 부드럽게
            // markers:true,
            // onLeave: (self) => {
            // //self.scroll(self.start); // 스크롤을 시작 지점에서 멈추도록 설정
            // setTimeout(() => self.enable(), 2000); // 2초 후 다시 스크롤 가능
            // }
        }
    })
    .to('.cont05 .popol_area',{'x':'-65vw','duration':'10','ease':'easeInOut'},4)
    .to('.cont05 .img_area ul:nth-child(even)',{'y':'-15vh','duration':'10','ease':'none'},4)
    .to('.cont05 .img_area ul:nth-child(odd)',{'y':'15vh','duration':'10','ease':'none'},4)
    .to('.cont05 .char',{y:'0', duration:0.3, ease:'ease-in',stagger: 0.2},0)

    // 06
    gsap.timeline({
        scrollTrigger:{
            trigger:'.cont06',
            start:'0% 0%',
            end:'+=6000',
            pin:true,
            anticipatePin:1,
            scrub:true,
            // markers:true
        }
    })
    .from('.cont06 .t1',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t2',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t3',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t4',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t5',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t6',{y:'150',autoAlpha:0, duration:1}, '+=1')
    .from('.cont06 .t7',{y:'150',autoAlpha:0, duration:1}, '+=1')
    

}); // load event