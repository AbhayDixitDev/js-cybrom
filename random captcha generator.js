let com='';
function show(){
    
    let character='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789';
    
    for(let i=0;i<6;i++){
        let store = character.charAt(Math.floor(Math.random()*character.length));
        com=com+store;
    // console.log(com);
    }
    document.querySelector('#cap').innerHTML=com;

}

function refresh(){
    com=''
    document.querySelector('#cap').innerHTML=com;
    show();
}

function submit(){
    let username =document.querySelector('#username').value;
    let password=document.querySelector('#password').value;
    let captcha=document.querySelector('#captcha').value

    if(username==='admin@gmail.com' && password==='1234'){
        if(com===captcha){
            window.location.href='apple.html';
        }
    }
}