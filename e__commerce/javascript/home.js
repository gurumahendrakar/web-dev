


class apps{

    constructor(){
        
        this.on = document.querySelector('.nav__container button');
        this.off  = document.querySelector('.mobile__nav__container button') 
        this.mobile_nav = $('.mobile__nav__container');


    }



    mobile_navEvent_adding(){
        this.on.addEventListener('click',function(){
            this.style.display = 'none';
            app.mobile_nav.css('display', 'flex');


        })


        this.off.addEventListener('click',function(){
            app.mobile_nav.css('display', 'none')
            app.on.style.display = 'block';

        })
        
        
    }








}



const app  = new apps();


app.mobile_navEvent_adding();



// const parse = new XMLHttpRequest();


// parse.open('GET', 'https://jsonplaceholder.typicode.com/posts')
// parse.send();



// parse.onreadystatechange = function(stage){
//     if (parse.readyState==4 && parse.status==200 ){
//         console.log(parse.responseText);
//     }
// }




let data = fetch('https://jsonplaceholder.typicode.com/posts');

data.then( async function(response){
    data = await response.json();
    console.log(data[0]);
})