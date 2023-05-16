



class boxes{

    constructor(){
        this.boxes = document.querySelectorAll('.box');
        this.me = true;
        this.last_played = '';
        this.chances = ['1','2','3','4','5','6','7','8','9'];
        this.winning_audio = document.createElement('audio');
        this.winning_audio_source = document.createElement('source');
        this.winning_audio.setAttribute('class','winning__audio')
        this.winning_audio_source.setAttribute('src','./songs/winningmusic.mp3')
        this.winning_audio.appendChild(this.winning_audio_source);
        this.winning_div = document.querySelector('.winning__player')
        this.winning_div.appendChild(this.winning_audio)
        

        this.wonned_or_not  = false;
        this.finish_audio = (document.querySelector('.winning__player audio'));
        

        
        this.div_1_classes = [document.querySelector('.box__1'),document.querySelector('.box__2'),document.querySelector('.box__3')];
        this.div_2_classes = [document.querySelector('.box__4'),document.querySelector('.box__5'),document.querySelector('.box__6')];
        this.div_3_classes = [document.querySelector('.box__7'),document.querySelector('.box__8'),document.querySelector('.box__9')];
        

        this.first_time = this.chances[Math.round(Math.random(8)*8)];
        document.querySelector('.box__'+this.first_time).innerHTML = '<img src="./images/o.png">'
        this.chances.splice(this.chances.indexOf(this.first_time),1)
    }





    boxes_events_add(){
      
        this.boxes.forEach(function(box){

            box.addEventListener('click',function(button){
                
                if (!box_es.wonned_or_not){



                    if (button.target.tagName=="BUTTON"){
                        box_es.chances.splice(box_es.chances.indexOf(button.target.classList[1][5]),1);
    
    
                        button.target.innerHTML = '<img src="./images/x.png">'
                        
                        
                        if (box_es.winner_check('x')){
                            box_es.wonned_or_not = true;
                            box_es.finish_audio.play()
                            document.querySelector('.winning__player h4').innerHTML = "YOU Wonned🔥🔥"
                            document.querySelector('.winning__player').style.display = "block"
    
                            setTimeout(function(){
                                window.location.reload();
                            },3000)
                            
                        }else{
    
                            console.log()
    
    
                            setTimeout(function(){
    
                                
                                let  random = Math.round(Math.random((box_es.chances.length-1))*(box_es.chances.length-1))
                                let div_number = box_es.chances[random];
                                let remove_index = box_es.chances.indexOf(div_number)
                                     
                                document.querySelector('.box__'+div_number).innerHTML = '<img src="./images/o.png">'
                                    
                                box_es.chances.splice(random, 1);
        
        
                                if (box_es.winner_check('o')){
                                    box_es.wonned_or_not = true;
                                    box_es.finish_audio.play();
                                    document.querySelector('.winning__player h4').innerHTML = "O Wonned🥲"
                                    document.querySelector('.winning__player').style.display = "block"
                                    setTimeout(function(){
                                        window.location.reload();
                                    },3000)
                                    
                                }else{
    
                                    if(!box_es.chances.length){
                                        box_es.finish_audio.play();    
                                        document.querySelector('.winning__player h4').innerHTML = "Drawed Match👍👍"
                                        document.querySelector('.winning__player').style.display = "block"
                                        setTimeout(function(){
                                            window.location.reload();
                                        },3000)
                                    
                                    }
                                }
                                
                            });
    
    
                        };
                
                    
                     }else{
                        alert("Please Choose Another🙂🙂");
                    
                    };

                    
                }
                    
                
                
            });
    
        })
    
    };



    winner_check(value){ 

        if (box_es.div_1_classes[0].innerHTML[19]==value &&
         box_es.div_1_classes[1].innerHTML[19]==value && 
         box_es.div_1_classes[2].innerHTML[19]==value ){
            return true;


        }else if (box_es.div_2_classes[0].innerHTML[19]==value &&
         box_es.div_2_classes[1].innerHTML[19]==value && 
         box_es.div_2_classes[2].innerHTML[19]==value){
            return true;
        

        }else if (box_es.div_3_classes[0].innerHTML[19]==value &&
         box_es.div_3_classes[1].innerHTML[19]==value && 
         box_es.div_3_classes[2].innerHTML[19]==value){
            return true;
        
        }else if (box_es.div_1_classes[0].innerHTML[19]==value &&
         box_es.div_2_classes[0].innerHTML[19]==value && 
         box_es.div_3_classes[0].innerHTML[19]==value){
            return true;
        

        }else if (box_es.div_1_classes[1].innerHTML[19]==value &&
         box_es.div_2_classes[1].innerHTML[19]==value && 
         box_es.div_3_classes[1].innerHTML[19]==value){
            return true;
        
        }else if (box_es.div_1_classes[2].innerHTML[19]==value &&
         box_es.div_2_classes[2].innerHTML[19]==value && 
         box_es.div_3_classes[2].innerHTML[19]==value){
            return true;
        
        }else if (box_es.div_1_classes[0].innerHTML[19]==value &&
         box_es.div_2_classes[1].innerHTML[19]==value && 
         box_es.div_3_classes[2].innerHTML[19]==value){
            return true;
        
        }

        if (box_es.div_1_classes[2].innerHTML[19]==value &&
         box_es.div_2_classes[1].innerHTML[19]==value && 
         box_es.div_3_classes[0].innerHTML[19]==value){
            return true;
        }
        
        
        
        
    };


};


const box_es =  new boxes();
box_es.boxes_events_add();



