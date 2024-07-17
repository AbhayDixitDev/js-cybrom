function imagegenerator(){
    let color_array =["https://wallpapers.com/images/hd/white-square-background-d28l8p1i4p1xnysj.jpg","https://cdn.pixabay.com/photo/2017/07/13/17/49/square-background-2501275_960_720.png","https://wallpapers.com/images/hd/square-background-k9hhhl4buh1a7cvj.jpg","https://img.lovepik.com/free-png/20211124/lovepik-square-background-panel-png-image_401117127_wh1200.png","https://c8.alamy.com/comp/PK4059/abstract-gradient-square-background-design-from-green-squares-PK4059.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaB9jvwDnRHO-NcZvV-5WvwV2tMetwWsysw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zfMnrIYSRZnZds6PgnzlPxmipDyeSAmMbw&s"];
        let len=color_array.length;
        let ran=Math.random();
        let mul=ran*len;
        let ind = Math.floor(mul);
        let output=color_array[ind];
console.log(output);
        let store=document.querySelector('#box');
        store.style.backgroundImage=`url(${output})`;

}