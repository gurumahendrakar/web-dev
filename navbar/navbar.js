


const spann = document.querySelector('.header-main-div-1')


const ull = document.querySelector('.header-main-div-3')



spann.addEventListener('click',function(){
    if (Number($('body').css('width').slice(0,($('body').css('width').length-2)))){
        if (($('.header-main-div-3').css('display')) === 'block') {
            ull.style.display = 'none';
        } else {
            ull.style.display = 'block';
        } 
    }

})


window.addEventListener('resize',function(){
    if ((Number($('body').css('width').slice(0, ($('body').css('width').length - 2))))>=870){
        ull.style.display = 'block';
    }else{
        ull.style.display = 'none';
    }
})