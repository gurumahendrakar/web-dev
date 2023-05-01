

class image{
    constructor(){
        this.images = ["../kagglewebsite/section-3-image-1.jpeg",
            "../kagglewebsite/section-3-image-2.jpg",
            "../kagglewebsite/section-3-image-3.jpg",
            "../kagglewebsite/section-3-image-4.png"]

            this.image_ = document.querySelector('.image');
            this.image_value = 0;


            this.button1 = document.querySelector('.button-left');
            this.button2 = document.querySelector('.button-right');
            this.suprise = document.querySelector('.suprise');


            this.button1.addEventListener('click',this.left_changer);
            this.button2.addEventListener('click', this.right_changer);
            this.suprise.addEventListener('click', this.surprise);

        };  


        surprise(){
            imagee.image_.setAttribute('src',imagee.images[(Math.floor(Math.random(4)*4))]);
        };

        left_changer(){
            
            imagee.image_value-=1 

            if (imagee.image_value==-1){
                imagee.image_value = 3;
            }
            
            imagee.image_.setAttribute('src', imagee.images[imagee.image_value]);
            
        };


        right_changer(){
            
            imagee.image_value+=1

            if (imagee.image_value==4){
                imagee.image_value = 0 
            }
            imagee.image_.setAttribute('src',imagee.images[imagee.image_value]);
            

        }


};

imagee = new image();



