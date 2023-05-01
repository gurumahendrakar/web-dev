

const submission_form = document.querySelector('.submission-form');
const button = document.querySelector('.submit');

function image_changer(name,location,photo,description){

    const namee = document.querySelector('.destination-name');
    const locationn = document.querySelector('.destination-location');
    const imagee = document.querySelector('.destination-image');
    const descriptionn = document.querySelector('.destination-description');
    
    
    imagee.setAttribute('src', photo.value)


    namee.textContent = 'Destination-name : '+name.value
    locationn.textContent = 'Destination-location : '+location.value
    descriptionn.textContent = 'Description : '+description.value
}



submission_form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const name  = e.target.elements['name'];
    const location  = e.target.elements['location'];
    const photo  = e.target.elements['photo'];
    const description  = e.target.elements['description'];

    
    image_changer(name,location,photo,description); 
    
}
)


