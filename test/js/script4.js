//00.a속성제거(a를 클릭했을 때 위로 튕기는 현상 제거)
$(document).on('click', 'a[href="#"]', function (e) { e.preventDefault(); })
//01. 스플리팅호출
$(function () {
    Splitting();
});

//02.header 영역 스크롤 방향 이벤트
$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();
        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
});

$(function () {
    //03.scrolla.js
    $('.animate').scrolla({
        moblie: true,
        once: false
    });
});

//04.svg path 2017
$(function () {
    $('.svgAni').find('#svgAni05').each(function (i, path) {
        var length = path.getTotalLength();
        //alert (Length);
    });
});

/*each()메서드는 object와 배열 모두 사용할 수 있는 반복함수인데, Length속성을 갖는 배열과 유사배열객체들의 index를 기준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개변수로 콜백함수 값을 인자로 받음*/

$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ' .con01',
            start: '0% 80%',
            end: '100% 100%',
            scrub: 1,
        }
    })
        .to('.wrap', { backgroundColor: '#fff', color: '#000', ease: 'none', duration: 5 }, 0)
        .to('.svgAni path', { stroke: '#000', ease: 'none', duration: 5 }, 0)
        .to('.scroll', { opacity: '0', ease: 'none', duration: 5 }, 0)
        .fromTo('.videoWrap video', { 'clip-path': 'inset(60% 60% 60% 60% round 30%)' }, { 'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10 }, 0);

    //.con02 gsap animation
    //title글자애니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con02",
            start: '0% 100%',
            end: '0% 20%',
            scrub: 1,
        }
    })
        .fromTo('.con02 .title .a', { x: '-100%' }, { x: '0%', ease: 'none', duration: 5 }, 0)
        .fromTo('.con02 .title .b', { x: '100%' }, { x: '0%', ease: 'none', duration: 5 }, 0);

    //workList가 나타날때 배경색 검정으로
    gsap.timeline({
        scrollTrigger: {
            trigger: '.workList',
            start: '0% 100%',
            end: '0% 100%',
            scrub: 1,
        }
    })
        .to('.wrap', { backgroundColor: "#000", color: "#fff", ease: "none", duration: 5 }, 0)
        .to('.con02 .title', { position: 'fixed', ease: 'none', left: '0', top: '0', width: '100%', duration: 5 }, 0)
        .fromTo('.workList', { margin: '0 auto' }, { margin: '100vh auto ', position: 'relative', zIndex: '10', duration: 1 }, 0);

    //worklist 끝날때 .title글자가 화면 밖으로 사라지도록 애니적용
    gsap.timeline({
        scrollTrigger: {
            trigger: '.workList',
            start: '100% 50%',
            end: '100% 0%',
            scrub: 1,
        }
    })
        .to('.con02 .title .a', { x: '-100%', ease: 'none', duration: 5 }, 0)
        .to('.con02 .title .b', { x: '100%', ease: 'none', duration: 5 }, 0);

    //simplyScroll
    $(function () {
        $(".con03 .list").simplyScroll({
            speed: 4,
            pauseOnHover: false,
            pauseOnTouch: false
        });
    });

    //menuOpen
    $(function () {
        $('.menuOpen').on('click', function () {
            $('.gnb').toggleClass('on');
            $(this).toggleClass('on');
            $('body').toggleClass('on');
        });
    });
