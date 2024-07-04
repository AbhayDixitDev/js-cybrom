function sub(){
    let name=document.querySelector('#name').value;
    let photo=document.querySelector('#photo').value;
    let email=document.querySelector('#email').value;
    let contact=document.querySelector('#contact').value;
    let github=document.querySelector('#github').value;
    let linkedin=document.querySelector('#linkedin').value;
    let profession=document.querySelector('#profession').value;
    let skills=document.querySelector('#skills').value;
    let high=document.querySelector('#high').value;
    let college=document.querySelector('#college').value;
    let year=document.querySelector('#year').value;
    let pass=document.querySelector('#pass').value;
    let cpass=document.querySelector('#cpass').value;

    if(name===""){
        window.alert("Please Enter Your Name");
        document.querySelector('#name').focus();
        return false;
    }
    else if(profession===""){
        window.alert("Please Enter Your Profession");
        document.querySelector('#profession').focus();
        return false;
    }
    else if(photo===""){
        window.alert("Please Enter Your Photo Url");
        document.querySelector('#photo').focus();
        return false;
    }
    else  if(email===""){
        window.alert("Please Enter Your Email");
        document.querySelector('#email').focus();
        return false;
    }
    else if(!(email.includes('@gmail.com') || email.includes('@outlook.com') || email.includes('@yahoo.com'))){
        window.alert("Please Enter Your Email Carefully, email should include @yahoo.com or @gmail.com or @outlook.com");
        document.querySelector('#email').focus();
        return false;
    }
    else  if(isNaN(contact)){
        window.alert("Contact Number Should be numeric only");
        document.querySelector('#contact').focus();
        return false;
    }
    else  if(contact.length !== 10){
        window.alert("Please Enter Contact Number again");
        document.querySelector('#contact').focus();
        return false;
    }
    else  if(contact===""){
        window.alert("Please Enter Your Contact Number");
        document.querySelector('#contact').focus();
        return false;
    }
    else  if(github===""){
        window.alert("Please Enter Your github url");
        document.querySelector('#github').focus();
        return false;
    }
    else  if(linkedin===""){
        window.alert("Please Enter Your linked url");
        document.querySelector('#linkedin').focus();
        return false;
    }
 
    else if(skills===""){
        window.alert("Please Enter Your Skills");
        document.querySelector('#skills').focus();
        return false;
    }
    else  if(high===""){
        window.alert("Please Enter Your Highest Qualification");
        document.querySelector('#high').focus();
        return false;
    }
    else  if(college===""){
        window.alert("Please Enter Your College Name");
        document.querySelector('#college').focus();
        return false;
    }
    else  if(isNaN(year)){
        window.alert("Year Should be numeric only");
        document.querySelector('#year').focus();
        return false;
    }
    else  if(year.length !== 4){
        window.alert("Year Should Be of 4 digit");
        document.querySelector('#year').focus();
        return false;
    }
    else  if(year===""){
        window.alert("Please Enter Passout Year");
        document.querySelector('#year').focus();
        return false;
    }
    else  if(pass===""){
        window.alert("Please Enter Your Password");
        document.querySelector('#pass').focus();
        return false;
    }
    else if(!pass.match('[/!@#$%^&*()_+<>?/]')){
        window.alert("not a strong password, it should contain special character");
        return false;
    }
    else if(!pass.match('[/1234567890/]')){
        window.alert("not a strong password, it should contain numeric characters");
        return false;
    }
    else if(!pass.match('[/qwertyuiopasdfghjklmnbvcxz/]')){
        window.alert("not a strong password, it should contain lower character");
        return false;
    }
    else if(!pass.match('[/QWERTYUIOPASDFGHJKLZXCVBNM/]')){
        window.alert("not a strong password, it should contain special character");
        return false;
    }
    else if(pass.length<8){
        window.alert("password length should be 8 or greater than 8");
        return false;
    }

    else if(pass !== cpass){
        window.alert("Password and Confirm Password Should be same");
        document.querySelector('#pass').value="";
        document.querySelector('#cpass').value="";
        document.querySelector('#pass').focus();
        return false;
    }

    let card=`<section id="card" >
        <center>
            <h1>RESUME</h1>
        </center>
        <div id="d1">
            <div>
                <h1>${name}</h1>
                <h3>${profession}</h3>
            </div>
            <div>
                  <img src="${photo}" alt="">
            </div>
        </div>
        <div id="hr">
            
        </div>
       
        <div id="d1">
          
            <div>
                <h2>Contact Details</h2>
                <h2>${email}</h2>
                <h2>${contact}</h2>
            </div>
            <div>
                <h3> <a href="${github}"><i class="fa-brands fa-github"></i>${github}</a></h3>
            <h3><a href="${linkedin}"><i class="fa-brands fa-linkedin"></i>${linkedin}</a></h3>
            </div>
        </div>
        <div id="hr">
            
        </div>
        <div>
            <h1>Skills</h1>
            <h2>${skills}</h2>
        </div>
        <div id="hr">
            
        </div>
        <div>
            <h1>Highest Qualification</h1>
            <h2>${high}</h2>
            <h3>${college}</h3>
            <h4>${year}</h4>
        </div>
        <div id="hr">
            
        </div>

    </section>`;

    let store=document.querySelector('#output');
    store.innerHTML=card;
    window.print(card)

    // console.log(name,profession,photo,email,contact,github,linkedin,skills,high,college,year)
 
    return false;
}