const wheel = $('.wheel__left');
const wheel2 = $('.wheel__right');

const car_marginleft = $('.car__png');

const car_value = car_marginleft.css('margin-left');
const left_value = wheel.css('margin-left');
const right_value  = wheel2.css('margin-left');


let value = 0;


setInterval(function(){
    
    
    let car = Number(car_marginleft.css('margin-left').slice(0,car_marginleft.length-3))+100 + "px";
    let tire_1 = Number(wheel.css('margin-left').slice(0,car_marginleft.length-3))+100 + "px";
    let tire_2 = Number(wheel2.css('margin-left').slice(0,car_marginleft.length-3))+100 + "px";
    let body_width = $('body').css('width');
    body_width = Number(body_width.slice(0,body_width.length-2));
    car_marginleft.css('margin-left',car);
    wheel.css('margin-left',tire_1)
    wheel2.css('margin-left',tire_2);


   let carr = Number(car.slice(0,car.length-2))
    
   if (carr>body_width){
    
    car_marginleft.css('margin-left','-1px');
    wheel.css('margin-left',left_value)
    wheel2.css('margin-left',right_value)
    }

},300)


setInterval(function(){
    if (value>360){
        value =30 ;
    }

    value+= 30 ;
    wheel.css('transform',`rotate(${value}deg)`);
    wheel2.css('transform',`rotate(${value}deg)`);
},100)



