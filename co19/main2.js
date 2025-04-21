(()=>{
    //data-index 속성 추가
    const stepEle = document.querySelectorAll('.step');
    const graphicEle = document.querySelectorAll('.graphic-item');
    let currentItem = graphicEle[0];
    const actions = {
        birdFlies(type){
            type ?  document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)` :
                    document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100px)`;
        },
        birdFlies2(type){
            type ?  document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight}px)` :
                    document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight}px)`;
        }
    }

    for(let i=0; i <stepEle.length; i++){
        stepEle[i].dataset.index = i;
        graphicEle[i].dataset.index = i;
    }

    const activate = (action) => {
        currentItem.classList.add('visible');
        if(action){
            actions[action](true);
        }
    }
    const inActivate = (action) => {
        currentItem.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }

    // 스크롤 시 해당 위치에 active 클래스 추가.
    // window.innerHeight top 10%보다 크고 브라우저 bottom 80%작은 상태의 값
    window.addEventListener('scroll',()=>{
        let step;
        let boundingRect;
        for(let i=0; i <stepEle.length; i++){
            step = stepEle[i]
            boundingRect = step.getBoundingClientRect();
            //console.log('boundingRect',boundingRect.top);
            if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8){
                
                inActivate(currentItem.dataset.action);
                // 해당 index에 맞는 .graphic-item에 클래스 추가
                currentItem = graphicEle[step.dataset.index];
                activate(currentItem.dataset.action);
            }
        }
    });

    activate();
})();