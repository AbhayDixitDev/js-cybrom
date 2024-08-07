let num1=56;
let num2 = 67;

const fun = () =>{
    console.log("this is funtion call");
}
const run = () =>{
    console.log("this is run funtion call");
}


export default num1;     //default export
export {num1,num2,fun, run};  // named export