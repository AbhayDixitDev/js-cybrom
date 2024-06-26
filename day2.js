"use strict";
function add(){
    var num1=20;
    var num2=39;
    console.log(num1+num2);
}
function run(){
    // var num1="abhay";
    // var num1 ="dixit";
    // let num1="abhay";
    // num1="dixit";
    const num1="abhay";
    console.log(num1);
}

function datatype(){
    let num=12n;
    let num1=12n;
    console.log(typeof(num));
    console.log(num+num1);
}

function datatype_undefined(){
    let num1=null;
    console.log(num1);
    let symbol1=Symbol("deepak");
    let symbol2=Symbol("deepak");
    console.log(symbol1==symbol2)
    let num3=2;
    let num2='2';

console.log(num2==num3)
console.log(num2===num3)
// 2==='2';
}

const call_arrow_function = ()=>{
    window.alert("function used")
}

