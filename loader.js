function run(){
    let time=500;
setTimeout(loader,time)
function loader(){
    let store=document.querySelector('#main');
    store.style.display="none";
    store.style.filter="blur(10px)";
    let loader=document.querySelector('#loading_circle');
    loader.style.display="block";    
} 


let time1=1500;
setTimeout(loader1,time1)
function loader1(){
    let store=document.querySelector('#main');
    store.style.display="block";
    store.style.filter="blur(2px)";    
    store.stle.animation="all ease-in-out";
    let loader=document.querySelector('#loading_circle');
    loader.style.display="block";    
} 

let time2=3000;
setTimeout(loader2,time2)
function loader2(){
    let store=document.querySelector('#main');
    store.style.display="block";
    store.style.filter="blur(0px)";
    let loader=document.querySelector('#loading_circle');
    loader.style.display="none";    
} 
}