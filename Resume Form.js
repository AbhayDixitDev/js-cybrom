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

       if(name===""){
        window.alert("Please Enter Your Name");
        return false;
    }
    else if(photo===""){
        window.alert("Please Enter Your Photo Url");
        return false;
    }
    else  if(email===""){
        window.alert("Please Enter Your Email");
        return false;
    }
    else if(!(email.includes('@gmail.com') || email.includes('@outlook.com') || email.includes('@yahoo.com'))){
        window.alert("Please Enter Your Email Carefully, email should include @yahoo.com or @gmail.com or @outlook.com");
        return false;
    }
    else  if(contact===""){
        window.alert("Please Enter Your Contact Number");
        return false;
    }
    else  if(github===""){
        window.alert("Please Enter Your github url");
        return false;
    }
    else  if(linkedin===""){
        window.alert("Please Enter Your linked url");
        return false;
    }
    else  if(profession===""){
        window.alert("Please Enter Your Profession");
        return false;
    }
    else if(skills===""){
        window.alert("Please Enter Your Skills");
        return false;
    }
    else  if(high===""){
        window.alert("Please Enter Your Highest Qualification");
        return false;
    }
    else  if(college===""){
        window.alert("Please Enter Your College Name");
        return false;
    }
    else  if(year===""){
        window.alert("Please Enter Passout Year");
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
    // window.print(card)

    // console.log(name,profession,photo,email,contact,github,linkedin,skills,high,college,year)
 
    // return false;
}