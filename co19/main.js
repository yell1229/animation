(function(){
    const actions = {
        birdFlies(type){
            type ?
            document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)` :
            document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)` ;
        },
        birdFlies2(type){
            type ?
            document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)` :
            document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)` ;
        }
    }

    const graphicEle = document.querySelectorAll(".graphic-item");
    const stepEle = document.querySelectorAll(".step");
    let currentItem = graphicEle[0]; // .visible이 붙은 아이템
    let ioIndex;
    const io = new IntersectionObserver((entries, opserver)=>{
        ioIndex = parseInt(entries[0].target.dataset.index);
        // console.log(ioIndex);
        
    });
    
    for(let i=0; i < stepEle.length; i++){
        graphicEle[i].dataset.index = i;
        stepEle[i].dataset.index = i;
        io.observe(stepEle[i]);
    }

    const activate = (action) =>{
        currentItem.classList.add('visible');    
        
        if(action){
            actions[action](true);
        }
    }
    const inActivate = (action) =>{
        currentItem.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }

    window.addEventListener('scroll',()=>{
        let step;
        let boundingReact;

        for(let i = ioIndex -1; i < ioIndex +2 ; i++){
            step = stepEle[i];
            if(!step) continue;

            boundingReact = step.getBoundingClientRect();
            if(boundingReact.top > window.innerHeight * 0.1 && boundingReact.top < window.innerHeight * 0.8){
                
                inActivate(currentItem.dataset.action);
                currentItem = graphicEle[step.dataset.index];           
                activate(currentItem.dataset.action);
                
            }
        }       
    }); // scroll event

    window.addEventListener('load',()=>{ // InterSectionOpserver 때문에 화면이 틀어짐.
        setTimeout(()=>{
            scrollTo(0,0)
        },100);
    });

    
    activate();

})();