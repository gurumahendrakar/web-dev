


// function namee(resolve,nosolve){
//     if ("Guru"=="Gur"){
//         return resolve('Like You')
//     }else{
//         throw Error('Bro U Are Not Guru !!')
//     }

    
// }


// const sex = new Promise(namee)




// function function1(){

//     const id = setTimeout(function2,1000);

//     function function2(){

//         clearTimeout(id);
//     };
// };




// document.querySelector('input').addEventListener('input',function1);


// const onee = (element,time,color,anotherfunction)=>{
    
//     setTimeout(()=>{
//         if (element){
//             element.style.color = color
//         }
        
//         if (anotherfunction){
//             anotherfunction()
//         }else{
//             return ('Sorry Please Define Best Function')
//         }

        
//         console.log("happy")
        
//     },time)

    
// }


// onee(two,2000,'red');



// function name(resolve,error){

//     if ("guru"=="gur"){
//         resolve("Fuck You")
//     }
//     else{
//         error('Error')
//     }
// }



// const io = new Promise(name);


// io.then(()=>{
//     console.log("Happy World")
// }).catch(()=>{
//     console.log("Error Handeled")
// });




// function king(){
//     throw TypeError("u r type error !!")
// }


// king().catch(()=>{
//     console.log("Eror")
// })






// function promiser(tag,color,time){
  

//     promise = new Promise(function(resolve,error){

//       setTimeout(()=>{
//         tag.style.color = color;
//         resolve('')

//       },time)
      
//     })
  
//     return (promise)
  

// }


// promiser(one,'green',1000).then(()=>{
//   promiser(two,'blue',1000).then(()=>{
//     promiser(three,'greenyellow',2000)
//   })
// });



// const request = new XMLHttpRequest();

// url = 'https://jsonplaceholder.typicode.com/posts'


// const io = (fetch(url));


// io.then(function(data){
  
//   if (data.ok){
//     return data.json()
//   }else{
//     throw Error("Something Wrong in your url !!")
//   }

// }).catch(()=>{
//   console.log("Error ")
// }).then((json)=>{
//   console.log(json)
// })




const open_menu = document.querySelector('.open-menu-btn');


const nav_menu = $(' nav .nav__menu');


const nav = document.querySelector('nav');


window.addEventListener('resize',function(){
  if (this.window.innerWidth>635){
    nav_menu.css('display','none')
    this.window.location.reload(true)

    
  }
})



window.addEventListener('scroll',()=>{
  if (window.pageYOffset>60){
    nav.classList.add('window-scroll')
  }else{
    nav.classList.remove('window-scroll')
  }
  
})



const button = document.querySelectorAll('.faq button');


button.forEach(function(button){
  button.addEventListener('click',function(){
    let article_div = (this.parentNode.parentNode.classList[1])
    main_div = $(`.${article_div}`)
    main_div_article = $(`.${article_div} article`)
    console.log(this);
    let opposite_div = null;
    


    if (article_div.slice(article_div.length-1)%2==0){
      opposite_div  = (article_div.slice(0,article_div.length-1))+Number(article_div[article_div.length-1]-1)
      opposite_div_article = $(`.${opposite_div} article`)
      opposite_div = $(`.${opposite_div}`)
      


    }else{
      opposite_div  = (article_div.slice(0,article_div.length-1))+(Number(article_div[article_div.length-1])+1)
      opposite_div_article = $(`.${opposite_div} article`)
      opposite_div = $(`.${opposite_div}`)
      
    }




    if (main_div_article.css('display')=="none"){

      main_div.css('height','100%')
      main_div_article.css('display','block')
      this.innerHTML = '<i class="fa-solid fa-minus" style="color: #ffffff;"></i>'


      
      if (opposite_div_article.css('display')=='none'){
        opposite_div.css('height','80px')
       
      
      }else{
        opposite_div.css('height','100%')
      }

    
    
    }else{
      main_div_article.css('display',"none")
      this.innerHTML = '<i class="fa-solid fa-plus" style="color:white;"></i>'
      main_div.css('height','100%')
      opposite_div.css('height','100%')
    }
})

})








open_menu.addEventListener('click',function(){
  (nav_menu.css('display'))
  
  
  if (nav_menu.css('display')=='block'){
    open_menu.innerHTML = '<i class="fa-solid fa-bars fa-1xl" style="color: #fffcfc;width: 50px;"></i>'
    nav_menu.css('display','none')
    nav_menu.css('width','0vw')
    

  }else{
    nav_menu.css('display','block')
    nav_menu.css('width','50vw')
    open_menu.innerHTML = '<i class="fa-solid fa-xmark fa-1xl" style="color:#ffffff; width:50px"></i>'
    
    $('.mobile__nav__h2').css('display','block')
   
    
    
  }
  
})





const clicking_buttons = document.querySelectorAll('.change__container > button');
const design_button = document.querySelectorAll('.design__container >  button');
const student = document.querySelectorAll('.student');



clicking_buttons.forEach(function(button){
  button.addEventListener('click',function(){

    for (let divv of student){
      if ($(divv).css('display')=='flex'){
        ($(divv).css('display','none'))
    }
  }

    

    $((`.scroll-${button.classList[0][button.classList[0].length-1]}`)).css('display','flex')



    document.querySelector(` .design__container  > .${button.classList[0]}`).style.border = "3px solid #6c63ff"
    
    setTimeout(function(){
      document.querySelector(` .design__container  > .${button.classList[0]}`).style.border = "none"
    },500)
  })

})



