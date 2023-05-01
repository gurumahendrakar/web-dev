
const main_div = document.querySelector('.question-main');
const text = document.querySelector('.text');
const button = document.querySelector('.submit');
const title = document.querySelector('.title');
const div_1 = document.querySelector('.question-main-div-1');

const number1 = Math.floor(Math.random() * 100)
const number2 = Math.floor(Math.random() * 100)


title.textContent = `What is ${number1} + ${number2}`;

button.addEventListener('click',function(e){
    create_element = document.createElement('h1');
    create_element.textContent = 'Right Answer';
    create_element.classList.add('answer');
    
    if (+text.value==number1+number2){
        main_div.appendChild(create_element);

        setTimeout(function(){
            window.location.reload();
        },1000)

    }else{
        

        create_element = document.createElement('h1');
        
        create_element.classList.add('answer');
        create_element.textContent = "Wrong Answer";
        main_div.appendChild(create_element);
        
        setTimeout(function(){
            main_div.removeChild(create_element);
        },1000)
        
    }

    


})
