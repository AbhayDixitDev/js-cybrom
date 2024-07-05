function change(){
    let store=document.querySelector('#d1');
    store.style.backgroundColor='black';
    store.style.borderRadius='50%';
    store.style.scale='0.8';
    store.style.transition='all 1s';

}
function reset(){
    let store=document.querySelector('#d1');
    store.style.backgroundColor='red';
    store.style.borderRadius='0';
    store.style.scale='1';
    store.style.transition='all 1s';

}


function change1(){
    let store=document.querySelector('#d2');
    store.style.backgroundImage='url("https://m.media-amazon.com/images/M/MV5BOThkZTZiZTYtNWU5Ny00ODY1LWJkZjMtMDhiNWM3NTMyZjY0XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg")';

}
function reset1(){
    let store=document.querySelector('#d2');
    store.style.backgroundImage='url("https://yespunjab.com/wp-content/uploads/2024/07/actor-Abhay-Verma.jpg")';

}