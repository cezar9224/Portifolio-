// // Transformando o menu em dinamico {em formato de X}//

const menuHamburgue = document.querySelector('.menu-hamburger');
menuHamburgue.addEventListener('click', () => {

    AlterarMenu();
});

function AlterarMenu(){
    const nav = document.querySelector('.nav-responsive')
    menuHamburgue.classList.AlterarMenu('change');

   if (menuHamburgue.classList.contains('change')){
       nav.style.display = 'block' ;
   } else {
      nav.style.display = 'none' ;
   }

 }

