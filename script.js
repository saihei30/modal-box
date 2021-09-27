'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)


// function for close modal when press the close button
const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
};

// function for open modal when press on the 'show modal button'
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// calling all modals
for(let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal)


// closing the modals by using the close modal function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// closing the modals by pressing "Escape" key on the keyboard
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
    }
});


