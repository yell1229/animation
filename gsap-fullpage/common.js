document.addEventListener('DOMContentLoaded', function() {
    const sections = gsap.utils.toArray(".section");
    let isScrolling = false;
    let currentSection = 0;
    let lastScrollTop = 0;
  
    gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 플러그인 등록
  
    function scrollToSection(index) {
      if (isScrolling) return;
      isScrolling = true;
      currentSection = index;
  
      gsap.to(window, {
        scrollTo: {
          y: sections[index].offsetTop,
          behavior: 'smooth' // 또는 'auto'
        },
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          isScrolling = false;
        }
      });
    }
  
    window.addEventListener("wheel", (e) => {
      if (isScrolling) return;
  
      const direction = e.deltaY > 0 ? 1 : -1;
  
      if (direction === 1 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (direction === -1 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    });
  
    // (선택 사항) 키보드 이벤트 처리
    window.addEventListener("keydown", (e) => {
      if (isScrolling) return;
  
      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    });
  });