


class timer{


    constructor(){
        this.hour_value = 0;
        this.hour = $('.hour__line');
        this.minute = $('.minute__line');
        this.second = $('.second__line');


        // console.log(this.date.getHours());
    

    }
}



const time = new timer();



setInterval(function(){
    let date = new Date();
    time.hour.css('transform',`rotate(${(180+(30*date.getHours()))}deg`);
    time.minute.css('transform',`rotate(${(180+(30*date.getHours()))+(0.35555555555555*date.getMinutes())}deg)`);
    time.second.css('transform',`rotate(${6 * date.getSeconds()}deg)`)
    

    time.hour.css('display', 'block');
    time.minute.css('display', 'block');
    time.second.css('display', 'block');

},0);