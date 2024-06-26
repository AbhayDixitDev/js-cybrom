function windowexample1(){
    let number1=parseInt(window.prompt("enter number 1"));
    let number2=parseInt(window.prompt("enter number 2") );
    window.alert(number1+number2)

}
function windowexample(){
    let username=window.prompt("enter your username");
    let password=window.prompt("enter your password") ;
    // window.alert(username+'\n'+password);
    if(username && password){
        window.alert("successful login");

        }    else{
        window.alert("data not found");
    }

}