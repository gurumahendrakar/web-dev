


class apps{

    constructor(){
        
        this.on = document.querySelector('.nav__container button');
        this.off  = document.querySelector('.mobile__nav__container button') 
        this.mobile_nav = $('.mobile__nav__container');


        window.addEventListener('resize',function(){

            let width = $('html').css('width')

            if (width.slice(0,width.length-2)>650){
                app.mobile_nav.css('display','none')
                app.on.style.display = 'none'
            }


            else{
                app.on.style.display = 'block'
            } 
        })

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





// let neww = new Promise(function(resolve,reject){
//     if (true){
//         resolve('hlo world');
//     }
// })


// neww.then(function(response){
//     console.log(response);
// })




function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<sender’s email address>",
	Password : "<email password>",
	To : '<recipient’s email address>',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}


