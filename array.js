// let arr=[12,45,67,"Abhay",function (){console.log("run function")}];

// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[3][0]);
// arr[4]();


let obj = {
    id:1,
    fname:"Abhay",
    lname:"Dixit",
    name: function() {
        return this.fname + " " + this.lname; 
      }
};
console.log(obj.name());

