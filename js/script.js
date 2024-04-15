const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clounds = document.querySelector('.clouds');


const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);
    element.play();
};

const stopSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);
    element.pause();
}


const jump = () => {

   
        mario.classList.add('jump');
        playSom('som_pular');
  
         
        setTimeout(() => {
            mario.classList.remove('jump')
    
        }, 500);
    }
    
    


const loop = setInterval (()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clounds).right.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        clounds.style.animation = 'none'
        clounds.style.right = `${cloudsPosition}px`

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginleft = '50px';
        playSom('dead');

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
   
 



