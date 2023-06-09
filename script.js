'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const showModal=document.querySelectorAll('.show-modal');
const closeModal=document.querySelector('.close-modal')


for(let i = 0 ; i<showModal.length;i++){
        showModal[i].addEventListener('click',()=>{
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden')
        })
 }
 const closeModal1=function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
 }

 closeModal.addEventListener('click',closeModal1);

 

 document.addEventListener('keydown',function(e){
    console.log(e.key)

    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal1();   
    }
 })

