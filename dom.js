const add= ()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2= parseInt(document.getElementById('num2').value);
    // console.log(num1+num2);
    document.getElementById('result').innerHTML=num1+num2;
}
const mul= ()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2= parseInt(document.getElementById('num2').value);
    console.log(num1*num2);
}
const divide= ()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2= parseInt(document.getElementById('num2').value);
    console.log(num1/num2);
}
const subtract= ()=>{
    let num1 = parseInt(document.getElementById('num1').value);
    let num2= parseInt(document.getElementById('num2').value);
    console.log(num1-num2);
}

