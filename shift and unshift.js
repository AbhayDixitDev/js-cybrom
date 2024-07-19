function run(){
    let arr=[45,67,54,64,54];
    arr.sort(function(a,b){return a-b}) //increase order
    console.log(arr);
    arr.sort(function(a,b){return b-a}) //decrease order
    console.log(arr);
    let ans=arr.reduce(function(a,b){return a+b})
    console.log(ans)
    // arr.shift();
    // arr.unshift(56,50);
    // delete arr[2]; //keep the place or index as empty
    // console.log(arr);
    // arr.splice(3,1)
    
    document.querySelector('#box').innerHTML = arr;
}