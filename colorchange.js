function colorgenerator(){
    let color_array =["green","black","blue","red","orange","yellow","white"];
        let len=color_array.length;
        let ran=Math.random();
        let mul=ran*len;
        let ind = Math.floor(mul);
        let output=color_array[ind]

        let store=document.querySelector('#box');
        store.style.backgroundColor=output;

}