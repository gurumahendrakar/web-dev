class counter {
    constructor(hex) {
        this.hex = hex

        this.button1 = document.querySelector('.button-1');
        this.button2 = document.querySelector('.button-2');
        this.button3 = document.querySelector('.button-3');
        this.counter = document.querySelector('.counter');

        this.buttons_array = [this.button1,this.button2,this.button3];
        this.buttonEventAttach();

    };


    buttonEventAttach(){
        for (let index of this.buttons_array){
            index.addEventListener('click', this.buttonClicked);
        };

    };


    buttonClicked() {
        
        if (this.textContent=='Decrease'.toUpperCase()){
            count.counter.textContent = Number(count.counter.textContent)-1    
        }else if (this.textContent=='Increase'.toUpperCase()){
            count.counter.textContent = Number(count.counter.textContent)+1
        }
        else{
            count.counter.textContent = 0;
            
        }

        if (Number(count.counter.textContent)>=1){
            count.counter.style.color = "Green";
        } else if (count.counter.textContent != '0') {
            count.counter.style.color = "Red" 
                
        }else{
            count.counter.style.color = "Black";
        }
    }
};




count = new counter();
