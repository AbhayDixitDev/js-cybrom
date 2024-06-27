let content =document.getElementById("div1").textContent;


function hello(){
    let arr="<h1>Hello There, I am Abhay Dixit</h1>";
let store=document.getElementById("div1");
    store.innerHTML=arr;
}

function reset(){
    let store=document.getElementById("div1");
    store.innerHTML=content;

}