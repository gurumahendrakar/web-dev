gsap.registerPlugin(ScrollTrigger)

let timeline  = gsap.timeline()

gsap.to('.starting_animation',{
    delay:1,
    height : '0%',
    duration:1
})
gsap.to('.owner__namediv__movingup',{
   delay:1,
    top :'0%',
    duration:1
})

gsap.to('.owner__namediv__movingup',{
    delay:1,
    height:'0%',
    duration:1
})


class visualEffect{

    constructor(name){
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
            
        }

    }



    lettersHeight(){
        let delay  = 1.7;
        let visual = "Visual";
        let colors = ['lightblue','grey','lightblue','grey','lightblue','greenyellow']
        for (let index in visual){
            
            gsap.to([`.${visual[index]}`],{
                delay : delay,
                height:'auto',
                duration:1,
                color : colors[index]
            });

            delay+=0.3
        }    
    };

}



visual = new visualEffect();



class Fatework{
    constructor(){
        this.tool = document.querySelector('.fateworkimage_round')
        this.image_div = document.querySelector('.image__hover__1')
        this.footwear__im1 = document.querySelector('.Left__image img');
        this.event_setting_imagehover('Right__image img')
        this.event_setting_imagehover('Left__image img')
        this.event_setting_imagehover('image__div__2 img')

        $('.see__playbook__btn').mouseenter(function(){
            $('.see__playbook__btn').css('width',"100%")
            $('.see__playbook__btn').css('background',"white")
        })
        
        $('.see__playbook__btn').mouseleave(function(){
            $('.see__playbook__btn').css('background',"none")
            $('.see__playbook__btn').css('width',"60%")
        })


        gsap.to(['.creativee__span','.header__text2',
        '.header__text3','.header__text4','.archive__animation'],{
            delay:1.7,
            height:'auto',
            
            duration:1
        })


        gsap.to('.description',{
            height:'0%',
            delay:2,
            duration:2
        })

    };


    event_setting_imagehover(classname){
        
        $(`.${classname}`).mousemove(function(e){
            e.stopPropagation()
            
            if (fatework.tool.style.display=='none'){
                fatework.tool.style.display = 'block'
                fatework.image_div.style.display = 'block'       
            }


            
            let [x,y] = [e.clientX,e.clientY]
          
            fatework.tool.style.left = `${x}px`
            fatework.tool.style.top =  `${y}px`
            fatework.image_div.style.left = `${x-30}px`
            fatework.image_div.style.top =  `${y+40}px`
         
            
            
            
        })
        $(`.${classname}`).mouseleave(function(e){
            
            fatework.tool.style.display  = 'none'
            fatework.image_div.style.display = 'none'
        });
    };

};

const fatework = new Fatework();






// URL = 'https://dummyjson.com/produc'
// function getpost(){
//     const response =  fetch(URL);
//     if (!response.ok){
//         throw new Error("Something went wrong")
//     }

//     const data = response.json()
//     return data
// }



// let io = getpost()
// io.then((data)=>{
//     return (data)
// }).then((data)=>{
//     console.log(data)
// }).catch(()=>{
//     console.log('Error')
// })




