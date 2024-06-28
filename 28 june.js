function sub(){
    let name=document.getElementById('name').value;
    let photo=document.getElementById('photo').value;
    let email=document.getElementById('email').value;
    let contact=document.getElementById('contact').value;
    let github=document.getElementById('github').value;
    let linkedin=document.getElementById('linkedin').value;
    let profession=document.getElementById('profession').value;
    let skills=document.getElementById('skills').value;
    let high=document.getElementById('high').value;
    let college=document.getElementById('college').value;
    let year=document.getElementById('year').value;

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

    let store=document.getElementById('output');
    store.innerHTML=card;

    // console.log(name,profession,photo,email,contact,github,linkedin,skills,high,college,year)
    return false;
}