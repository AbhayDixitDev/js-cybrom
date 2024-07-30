let data=[
    {
        "id":1,
        "email":"gagan@gmail.com",
        "password":"12345",
    },
    {
        "id":2,
        "email":"abhishek@gmail.com",
        "password":"12345",
    },
    {
        "id":3,
        "email":"arpan@gmail.com",
        "password":"12345",
    },
    {
        "id":4,
        "email":"rohit@gmail.com",
        "password":"12345",
    }
]

let arrofobj;
function run(){
    
    // let id=document.querySelector('#id').value;
    let name=document.querySelector('#username').value;
    let Class=document.querySelector('#password').value;

let obj={
    // "id":id,
    "username":username,
    "password":password
}
}
arrofobj.push(obj);
window.localStorage.setItem('Information',JSON.stringify(arrofobj));
console.log(arrofobj);
// return false;

function login(){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username,password);
    let response= data.find(e=>e.email===username && e.password===password);
    if(response){
        window.alert("Successful Login");
        location.href="apple.html";
    }
    else{
        window.alert("please register");
        location.href="form add.html";
    }


}

arrofobj;
