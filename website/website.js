gsap.registerPlugin(ScrollTrigger)

let timeline  = gsap.timeline()

timeline.to('.starting_animation',{
    delay:2,
    height : '0px',
    duration: 1
})
gsap.to('.owner__namediv__movingup',{
    delay:1.8,
    height:'30vh',
    duration:1
})

gsap.to('.starting_animation ~ * ',{
    delay:2,
    display : 'block',
    duration:1
})

class visualEffect{

    constructor(){
        this.visual_element = document.querySelector('.visual');
        this.letter_adding();
        this.lettersHeight();
                
        
    }


    letter_adding(){
        
        for (let index of "Visual"){
            let element = document.createElement('span');
            element.textContent = index;
            element.classList.add(index);
            this.visual_element.appendChild(element);
            element = $(`.${index}`);
            element.css('display','inline-block');
            
            element.css('widht','0px');
            element.css('height','0px');
            element.css('overflow','hidden');
            element.css('color','lightblue')
        }

    }



    lettersHeight(){
        let delay  = 1.7;
        for (let index of 'Visual'){
            
            gsap.to(`.${index}`,{
                delay : delay,
                height:'auto',
                duration:1
            });

            delay++
        }    
    };

    

     

    


    

}



visual = new visualEffect();



