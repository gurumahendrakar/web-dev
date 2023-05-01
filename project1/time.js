
const hour = document.querySelector('.Hours');
const minutes = document.querySelector('.Minutes');
const seconds = document.querySelector('.Seconds');
const miliseconds = document.querySelector('.Miliseconds');
const am_pm = document.querySelector('.am-pm');


function timer(){


    const date = new Date();
    setTimeout(()=>{
       
        hour.textContent = date.getHours();
        minutes.textContent = date.getMinutes(); 
        seconds.textContent = date.getSeconds();
        miliseconds.textContent = date.getMilliseconds();
        am_pm.textContent = date.getHours() <= 12 ? 'AM' : 'PM';
        
    
        timer();
        
    
    },1000);
    
}

timer();



const on = document.querySelector('.range');
const hel  = document.querySelector('.sexo');


on.setAttribute('max',(window.innerWidth));



on.onchange = (e)=>{
    hel.style.left = `${+e.target.value}px`
    hel.textContent = e.target.value
    
    console.log(e.target.value)
    console.log(hel.style.value)
};




$().ready(function(){
    alert('Please wait');
});