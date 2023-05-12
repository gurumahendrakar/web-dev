

class songpaths{

    constructor(){

        this.songs = ["Tharki Chokro",
        "Love is a Waste Of time",
        "Chaar Kadam",
        "Nanga Punga Dost",
        "Bhagwan Hai Kahan Re",
        "Pk Dance Theme",
    ];

        this.songs__paragraph__names = document.querySelectorAll('.songs__container .song__name__div p');
        this.song_duration_tag = document.querySelectorAll('.songs__container .duration__playbutton p')
        this.all_audio = document.querySelectorAll('audio');
        this.song_duration = document.querySelector('.song__duration');
        
        this.ran = document.querySelector('input[type="range"]');


        

    }


    songsnamesAdding(){
        
        for (let index in this.songs){
            this.songs__paragraph__names[index].textContent = this.songs[index];
            
        }
    }


}



class songduration extends songpaths{


    constructor(){
        super();

        this.duration_width = $('.playing__duration');
        this.last_song_played = this.all_audio[0];
 
    }

}





class buttons extends songduration{

    constructor(){
        super();

        this.buttons = document.querySelectorAll('.songs__container button');
        this.gif_player = document.querySelector('.audio__visulation');
        this.middle__buttons = document.querySelectorAll('.music__bottom__container button');


        


    };


    button_event_function__section__4(button){

        


        let audio = document.querySelector(`.${button.target.parentNode.parentNode.parentNode.parentNode.classList[0]} audio`);
        let btn = (button.target.parentNode.parentNode);


        main_head.all_audio.forEach(function(audioo){


            if (audio.id != audioo.id){

                let oppisite_audio = document.querySelector(`.${audioo.parentNode.classList[0]} button`);
                oppisite_audio.innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'
                audioo.pause();
            }

        })

        
        if (audio.paused!=true){

           main_head.middle__buttons[2].innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'
            btn.innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'
            audio.pause();
            main_head.gif_player.setAttribute('src',"./images/stoped.gif")
        
        }else{
            
            

            main_head.last_song_played = audio;
          

            main_head.ran.value = main_head.last_song_played.currentTime
            main_head.ranges[0].setAttribute('max',audio.duration);

            $('.playing__number').css('display','block');
            main_head.middle__buttons[2].innerHTML = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'
            document.querySelector('.playing__number').textContent  = `Playing ${audio.id} of 6`
            btn.innerHTML = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'
            audio.play();
            main_head.gif_player.setAttribute('src','./images/audio__playing.gif'); 
        
            
        }

        
    };

    button_events(){

        this.buttons.forEach(function(button){
            button.addEventListener('click',main_head.button_event_function__section__4)
        });
    };

};



class music__middle__buttonEvents extends buttons{

    constructor(){
        super();
        this.middle__container__buttons = document.querySelectorAll('.music__bottom__container button');
    }

    play(audio){

        if (main_head.last_song_played){
            
            let current_playingbutton = (document.querySelector(` .${main_head.last_song_played.parentNode.classList[0]} button`))

            
            if (main_head.last_song_played.paused!=true){

                
                (main_head.middle__container__buttons[2]).innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'
                main_head.last_song_played.pause();    
                current_playingbutton.innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'


            }else{
                (main_head.middle__container__buttons[2]).innerHTML = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'
                main_head.last_song_played.play();
                current_playingbutton.innerHTML  = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'
            }
        };
    }

    middle__buttons__eventsAdd(){

        let play__button = (this.middle__container__buttons[2])
        play__button.addEventListener('click',main_head.play)


        this.middle__container__buttons[4].addEventListener('click',function(button){

            if (main_head.last_song_played){                
                
                let now_audio = (main_head.last_song_played);

                
                if (now_audio.id.slice(now_audio.id.length-1)<=5){
                    
                    let next_song = document.querySelector(`.${(main_head.last_song_played.parentNode.nextSibling.nextSibling.classList[0])} audio`);
                    let next_song_button  = document.querySelector(`.${next_song.parentNode.classList[0]} button `) ;
                    let now_audio_button = document.querySelector(`.${(now_audio.nextSibling.parentNode.classList[0])} button`);

                    main_head.last_song_played = next_song;

                    
                    console.log(main_head.last_song_played);
                    main_head.ran.value = main_head.last_song_played.currentTime
                    document.querySelector('.playing__number').textContent = (`playing  ${main_head.last_song_played.id} of 6`)

                    now_audio.pause();
                    now_audio_button.innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'

                
                    next_song.play();
                    next_song_button.innerHTML = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'


                };
                
            };
        
        });


        this.middle__buttons[1].addEventListener('click',function(){


            if (main_head.last_song_played){                
                
                let now_audio = (main_head.last_song_played);

                
                if (now_audio.id.slice(now_audio.id.length-1)>1){
                    
                    let previous_song = document.querySelector(`.${(main_head.last_song_played.parentNode.previousSibling.previousSibling.classList[0])} audio`);
                    let previous_song_button  = document.querySelector(`.${previous_song.parentNode.classList[0]} button `) ;
                    let now_audio_button = document.querySelector(`.${(now_audio.nextSibling.parentNode.classList[0])} button`);

                    main_head.last_song_played = previous_song;
                    main_head.ran.value = main_head.last_song_played.currentTime
                    document.querySelector('.playing__number').textContent = (`playing  ${main_head.last_song_played.id} of 6`)
                    now_audio.pause();
                    now_audio_button.innerHTML = '<span class="play__button"><i class="fa-solid fa-circle-play fa-2xl" style="color: #000000;"></i></span>'

                
                    previous_song.play();
                    previous_song_button.innerHTML = '<span class="pause__button"><i class="fa-solid fa-circle-pause fa-2xl" style="color: #000000;"></i></span>'


                };

            }
        })


        
            
        }
                
        
    }

    




class volume extends music__middle__buttonEvents{

    constructor(){
        super();
        this.ranges  = document.querySelectorAll('input[type = "range"]');
        this.volume = this.ranges[1];
        this.duration = this.ranges[0];
        
    }

    volume_changed(e){

        if (main_head.last_song_played){
            main_head.last_song_played.volume = e.target.value;
        }
        
    }

    volume_event_adder(){
        this.volume.addEventListener('change',main_head.volume_changed)
    }

    duration_event_adder(){


        this.duration.addEventListener('change',function(duration){
           

            if (main_head.last_song_played){
                main_head.last_song_played.currentTime = (duration.target.value);
                (main_head.song_duration).textContent = (""+((main_head.last_song_played.duration)/(main_head.last_song_played.duration)/100)* main_head.last_song_played.currentTime).slice(0,4)
            }
            
        })
    }
}



const main_head = new volume();
main_head.songsnamesAdding();
main_head.button_events();
main_head.middle__buttons__eventsAdd();
main_head.volume_event_adder();
main_head.duration_event_adder();


setTimeout(function(){
    
    for (let index in main_head.all_audio){
        main_head.song_duration_tag[index].textContent = Number((""+(main_head.all_audio[index].duration)).slice(0,3))/100;
    }


    

},200);



setInterval(function(){
    
    if (main_head.last_song_played){

        if (main_head.last_song_played.currentTime==main_head.last_song_played.duration){
            main_head.last_song_played.currentTime = 0;
            main_head.last_song_played.play();
        }

    }
    
    if (main_head.last_song_played){
        main_head.ranges[0].value = main_head.last_song_played.currentTime;
        (main_head.song_duration).textContent = (""+((main_head.last_song_played.duration)/(main_head.last_song_played.duration)/100)* main_head.last_song_played.currentTime).slice(0,4)
    }
    
},1000)




