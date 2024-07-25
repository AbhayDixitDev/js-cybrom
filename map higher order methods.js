function run(){
    let arr = [1,2,3,4,5,6,7,8,9];

    //arr.map(item=>{console.log(item52)});
    //arr.map(d=>{window.alert(d)})

    let store = arr.map(e => {
        return e*10
    }).join(" ");
    document.querySelector("#output").innerHTML = store;

    let store1 = arr.map(d => {
        return d*12
    }).join(" ");
    document.querySelector("#output1").innerHTML = store1;

}


