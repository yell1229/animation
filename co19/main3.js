(function(){
    const stepEle = document.querySelectorAll('.step');
    const graphicEle = document.querySelectorAll('.graphic-item');
    let currentImg = graphicEle[0];

    stepEle.forEach((ele,i)=>{
        ele.dataset.index = i;
        graphicEle[i].dataset.index = i;
    })

    const inActive = () =>{
        currentImg.classList.add('visible');
    }
    const unActive = () =>{
        currentImg.classList.remove('visible');
    }
    window.addEventListener('scroll',()=>{
        let step;
        let clientRect;
        for(let i=0; i<stepEle.length; i++){
            step = stepEle[i];
            clientRect = step.getBoundingClientRect();
            if(clientRect.top > window.innerHeight *0.1 && clientRect.top < window.innerHeight *0.8){
                
                unActive();
                currentImg = graphicEle[step.dataset.index];
                inActive();
            }
            
        }
    });// scroll event
    inActive();
})();