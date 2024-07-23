
let arrofobj=[];
function run(){
    
    let id=document.querySelector('#id').value;
    let name=document.querySelector('#name').value;
    let Class=document.querySelector('#class').value;
   if(id==="" || name==="" || Class===""){
    document.querySelector('#id').value="";
    document.querySelector('#name').value="";
    document.querySelector('#class').value="";

    window.alert("enter all field");
    
   }
   else{
    console.log(Class);
    console.log(name);
    console.log(id);
    let obj={
        "id":id,
        "name":name,
        "class":Class
    }
    arrofobj.push(obj);
    window.localStorage.setItem('Information',JSON.stringify(arrofobj));

    return false;
    
   }
}