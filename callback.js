let time=1000;
setTimeout(callbackfunction,time)
function callbackfunction(){
    let design=`<div id="card">  <i onclick="close1()" class="fa-solid fa-xmark"></i></div>`
    document.querySelector('#output').innerHTML=design;
    let s=document.querySelector('h1');
    s.style.filter="blur(20px)";
    
  

}
function close1(){
    // let empty = `<br>`;
    document.querySelector('#output').innerHTML=" ";
    let s=document.querySelector('h1');
    s.style.filter="blur(0px)";
}




