const cards = document.querySelectorAll('.food-card');

cards.forEach((card)=>{

card.addEventListener('mouseenter', ()=>{

card.style.transform = 'translateY(-12px) scale(1.02)';

});

card.addEventListener('mouseleave', ()=>{

card.style.transform = 'translateY(0px) scale(1)';

});

});

window.addEventListener('scroll', ()=>{

const header = document.querySelector('header');

if(window.scrollY > 50){

header.style.background = 'rgba(255,255,255,.9)';

}else{

header.style.background = 'rgba(255,255,255,.6)';

}

});