let arr=[34,57,8,9,9,1];
let arr1=[34,5,80,9,9];
let arr5=JSON.stringify(arr);

arr.reverse();
console.log(arr);

let output=arr.join(" ");
console.log(output);

let output1=arr.toString();
console.log(output1);

let arr3=arr.concat(arr1);
console.log(arr3);

let arr4=arr3.slice(0,4);
console.log(arr4);

function run(){
    window.localStorage.setItem('name','RAM');
window.localStorage.setItem('batch','p29');
window.localStorage.setItem('array',arr5)
}