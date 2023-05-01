


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




const nav = document.querySelector('nav');



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

    
    

    if (main_div_article.css('display')=='block'){
      main_div_article.css('display','none')
      opposite_div.css('height','100%')


    }else{

      if (main_div.css('height')=='100px'){
        main_div.css('height','100%')
        
      }

      main_div_article.css('display','block')
      

      if (opposite_div_article.css('display')=='block'){
        opposite_div.css('height','100%')
        
      }else{
        opposite_div.css('height','100px')
      
    }

}})

})