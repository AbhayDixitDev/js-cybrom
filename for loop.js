let arr=[56,6,80,5,40];
// console.log("for in loop");
// for(let i in arr){
//     console.log(i);
//     console.log(arr[i]);
// }
// console.log("for of loop");

// for(let i of arr){
//     console.log(i);
// }

console.log(arr);
arr.pop();
console.log(arr);
arr.push(45);
console.log(arr);
arr.splice(arr.length-1,1)
console.log(arr);
arr.splice(arr.length,0,32)
console.log(arr);
arr.splice(2,1)
console.log(arr);
arr.splice(arr.length,0,"Abhay","Shivansh","Mandeep","Gagan","Saksham","Arpan","Tanu")
console.log(arr);