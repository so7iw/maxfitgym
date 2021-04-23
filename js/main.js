    navOutput();
    offersOutput();
    authorOutput();
    formOutput();
    aboutOutput();
    coachOutput();
    footerOutput();

//ispis navigaicje

function navOutput(){

let tag = ["#offer","#contact","#aboutus","#auth"]
let name = ["Programs","Survey","About us","Author"]
let output = "";
output+=`
<a class="navbar-brand text-danger" href="#">MaxFit</a>
		  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            `
            for (let i=0;i<tag.length;i++){
                output+=`
			  <li class="nav-item">
				<a class="nav-link" href="${tag[i]}">${name[i]}</a>
              </li>
              `
            }
            output+=`
			</ul>
          </div>
          `
          document.getElementById("navig").innerHTML = output;
}

// ispis ponude

function offersOutput() {
    var options = [
        {
            name: "Crossfit",
            price: 120,
            image: {
                src: "img/crossfit.jpg",
                alt: "crossfit"
            },
            content: "CrossFit is promoted as both a physical exercise philosophy and a competitive fitness sport, incorporating elements from high-intensity interval training, Olympic weightlifting, plyometrics, powerlifting, gymnastics, girevoy sport, calisthenics, strongman, and other exercises.",
        },
        {
            name: "Calisthenics",
            price: 100,
            image: {
                src: "img/calisthenics.jpg",
                alt: "calisthenics"
            },
            content: "Calisthenics is a form of strength training consisting of a variety of movements that exercise large muscle groups (gross motor movements), such as running, standing, grasping, pushing, etc. These exercises are often performed rhythmically and with minimal equipment, as bodyweight exercises.",
        },
        {
            name: "Bodybuilding",
            price: 120,
            image: {
                src: "img/bb.jpg",
                alt: "bodybuilding"
            },
            content: "Bodybuilding is the use of progressive resistance exercise to control and develop one's musculature (muscle buliding) by muscle hypertrophy for aesthetic purposes.",
        },
        {
            name: "Power Lifting",
            price: 120,
            image: {
                src: "img/pl1.jpg",
                alt: "power lifting"
            },
            content: "Powerlifting is a strength sport that consists of attempts at maximal weight on three lifts: squat, bench press, and deadlift. You can expect a hard time, but this program will make you stronger, way stronger.",
        },
        {
            name: "Gym Membership",
            price: 30,
            image: {
                src: "img/gym.jpg",
                alt: "gym"
            },
            content: "As simple as it can be - you are the master of your world. All machines and weights are available for your use, but you don't have a coach to guide you.",
        },
        {
            name: "Recovery",
            price: 100,
            image: {
                src: "img/recovery.jpg",
                alt: "recovery"
            },
            content: "If you suffered an injury, but want to get back into the game, this is an option for you.",
        },
    ];
    let output = "";
    let i=0;
    for(let obj of options){
        output += `
        <div class="col-lg-6 col-sm-6">
            <div class="item">
                <a class="discipline" data-toggle="modal" href="#Modal1">
                    <img class="img-fluid" src="${obj.image.src}" alt="${obj.image.alt}"  />
                </a>
                <div class="caption">
                    <div class="caption-heading text-light" >${obj.name}</div>
                    <div class="caption-subheading text-light">${obj.price} &#8364 / month</div>
                    <p class="add caption-subheading text-muted">${obj.content}</p>
                    <a class="showHide btn btn-primary btn-danger subj" href="#something">Read More</a>
                </div>
            </div>
        </div>
    ` 
    }
    document.getElementById("packages").innerHTML = output;
    
}

//ispis autora

function authorOutput() {
    var options = [
        {
            image: {
                src: "img/author.jpg",
                alt: "Author"
            },
            nameFull: "Miloš Stojanovski",
            descr: "My name is Miloš Stojanovski, I was born on the 11th of March 1998. in Pančevo. I finished the 3rd Grammar School in Belgrade and now I am studying at the ICT College, University of Belgrade. In addition, I work full time at Euronet Worldwide as a system analyst. I am creative, hard working, and always eager to learn something new and further advance in IT area of expertise. ",
        },
    ];
    var output = "";
    for (let obj of options){
    output +=`
                <h3 class="section-heading text-light text-uppercase subj"> Author </h3>
                <div class="col-md-4">
                    <img class="img-fluid rounded mx-auto d-block" src="${obj.image.src}" alt="${obj.image.alt}" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <h4 class="h3 section-heading text-light"> ${obj.nameFull}</h4>
                    <p id="description" class="text-muted"> ${obj.descr} </p>
                </div>
                `
    }
    document.getElementById("author").innerHTML = output;
}

//ispisivanje forme

function formOutput(){

let questions = ["Do you want to gain muscle mass?","Do you wish to loose unwanted weight?","Do you think you are stronger than your average person?","Do you think you are more endurable than your average person?","Do you have a strong competetive spirit?","Are you ready to test the utmost limits of both your mind and body?","Did you come to us because you would simply like to be more attractive?","Did you come to us to seek safe recovery?"];
let i = 0;
let output1="";
output1 +=`
<form name="form1" action="">
			<div class="row text-center text-uppercase justify-content-center" id="form">
                <h3 class="section-heading text-uppercase text-light subj">Take a short survey</h3>
                <p class="text-light">We want to help you to asses your qualities, to embrace your flaws, and to start your fitness journey with clear motive in mind. </br>Check boxes next to lines you agree/find yourself in, click submit and let us try to determine best course of action.</p>
                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
`
                    for (let obj of questions){
                    output1 +=`                    
                        <div class="form-check text-start">
                            <input class="form-check-input" type="checkbox" name="list" value="" id="b${i}">
                            <label class="form-check-label text-light" for="b${i++}">
                            ${obj}
                            </label>
                        </div>
`}
output1 +=`
				</div>
				<div class="col-md-12">
						<div class="form-group">
							<input type="button" id="submit" onClick = "formValidation1(document.form1.list)" value="Submit" class="btn btn-primary btn-light" />
						</div>
					</div>
				</div>
			</form>
`
document.getElementById("contact").innerHTML = output1;
}

//ispisvanje forme 2

function formOutput2(){
let options = [
    {
        text: "Full name",
        id: "name",
        placeholder: "Ime i Prezime",
        alertId: "alertName",
        alertT: "Invalid full name. Full name consists of first and last names (freely add middle or second last name), of which both start with a capital letter and are separated with space."
    },
    {
        text: "Email",
        id: "email",
        placeholder: "example@something.com",
        alertId: "alertEmail",
        alertT: "Invalid email address. Enter existing email address, in format example@something.com."
    },
    {
        text: "Phone number",
        id: "phone",
        placeholder: "06X XXXXXXX",
        alertId: "alertPhone",
        alertT: "Invalid phone number. Enter a number in following format 06X (space) XXXXXXX."
    }
]
let arr = ["Crossfit","Calisthenics","Bodybuilding","Powerlifting","Gym Membership","Recovery"]
let output2 ="";
output2 +=`
<form action="">
			<div class="row text-center text-uppercase" id="form">
				<h3 class="section-heading text-uppercase text-light subj">Sign up for your first session!</h3>
                <div class="col-md-6 col-sm-12">
                `
                for (let obj of options){
                    output2 +=`
						<div class="form-group">
							<label class="text-light" for="">${obj.text}</label>
							<input type="text" id="${obj.id}" class="form-control" required="required" placeholder="${obj.placeholder}"/>
							<p class="alert alert-danger alertOutput" id="${obj.alertId}">${obj.alertT}</p>
						</div>
                        `
                }
                output2+=`
				</div>
				<div class="col-md-6 col-sm-12">
						<div class="form-group">
							<label class="text-light" for="">Pick a suitable date:</label>
							<input type="date" id="date" class="form-control" required="required" />
							<p class="alert alert-danger alertOutput" id="alertDate">Cannot be in the past.</p>
                        </div>
                        <select class="form-select btn btn-light" id="program" aria-label="Default select example">
                            <option selected>Choose your program</option>
                            `
                for (let i=1;(i<arr.length+1); i++){
                    output2+=`
                            <option value="${i}">${arr[i-1]}</option>
                            `
                }
                output2+=`
                        </select>
                        <p class="alert alert-danger alertOutput" id="alertProg">Please choose a program.</p>
						<div class="form-group">
							<input type="button" id="btnSend" onClick="formValidation2()" value="Send" class="btn btn-primary btn-light" />
                        </div>
                        <div class="form-group">
							<input type="button" id="btnBack" onClick="formOutput()" value="Back to survey" class="btn btn-primary btn-light" />
                        </div>
					</div>
				</div>
			</form>
            `
             document.getElementById("contact").innerHTML = output2;
             let alerts = document.getElementById("form").getElementsByClassName("alertOutput");
             for (let obj of alerts){
                 obj.style.display = "none";
             }
            document.getElementById('date').value = new Date().toISOString().slice(0, 10);

}

//obrada i validacija formi

function formValidation1(field){

    let list = [0,0,0,0,0];
    let num=0;
    let sum=0;
    for (let i=0;i<field.length;i++){
    if (field[i].checked==true && i==0)	{list[0]++;list[1]++;list[2]++};
    if (field[i].checked==true && i==1)	list[1]++;
    if (field[i].checked==true && i==2)	list[2]++;
    if (field[i].checked==true && i==3)	{list[1]++;list[3]++};
    if (field[i].checked==true && i==4)	{list[0]++;list[2]++};
    if (field[i].checked==true && i==5)	list[2]++;
    if (field[i].checked==true && i==6)	list[0]+=10;
    if (field[i].checked==true && i==7)	list[4]+=10;
    }
    for (let i =0; i<5; i++){
        sum+=list[i];
        if (list[i]>num) num=i;
    }
    if (sum === 0){
        window.alert("Please check at least one option.");
    }
    else{
    switch(num) {
        case 0:
            window.alert("We believe that Bodubuilding is the best program for you! Why don't you sign up for the first session?");
            break;
        case 1:
            window.alert("We believe that Crossfit is the best program for you! Why don't you sign up а for the first session?");
            break;
        case 2:
            window.alert("We believe that Powerlifting is the best program for you! Why don't you sign up for the first session?");
            break;
        case 3:
            window.alert("We believe that Calisthenics is the best program for you! Why don't you sign up for the first session?");
            break;
        case 4:
            window.alert("We believe that Recovery is the best program for you! Why don't you sign up for the first session?");
            break;
        default:
            window.alert("We believe that Bodubuilding is the best program for you! Why don't you sign up for the first session?");
            break;
      }
    formOutput2();
    }

}

// regex funkcije

function hasNumber(myString) {
    return /\d/.test(myString);
}

function emailCheck(myString){
    return /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/.test(myString);
}

function nameCheck(myString){
    return /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/.test(myString);
}

function phoneCheck(myString){
    return /^[0][6][0-9]\s[0-9]{7,10}$/.test(myString);
}


function formValidation2(){
    let name, email, phone, date, program;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    date = new Date (document.getElementById("date").value);
    program = document.getElementById("program").value;
    date.setHours(0,0,0,0);

    let flag = false;

    let today = new Date();
    today.setHours(0,0,0,0);

    if (name === "" || !nameCheck(name)){
        document.getElementById("alertName").style.display = "block";
        flag = true;
    } 
    else document.getElementById("alertName").style.display = "none";
    if (email === "" || !emailCheck(email)){
        document.getElementById("alertEmail").style.display = "block";
        flag = true;
    } 
    else document.getElementById("alertEmail").style.display = "none";
    if (phone === "" || !phoneCheck(phone)){
        document.getElementById("alertPhone").style.display = "block";
        flag = true;
    } 
    else document.getElementById("alertPhone").style.display = "none";
    if (date < today){
        document.getElementById("alertDate").style.display = "block";
        flag = true;
    } 
    else document.getElementById("alertDate").style.display = "none";
    if (program === "Choose your program"){
        document.getElementById("alertProg").style.display = "block";
        flag = true;
    } 
    else document.getElementById("alertProg").style.display = "none";
    if (!flag){
        
        document.getElementById("name").value = "";
        document.getElementById("email").value= "";
        document.getElementById("phone").value= "";
        document.getElementById("date").value = new Date().toISOString().slice(0, 10);
        document.getElementById("program").value = "Chose your program";
        window.alert("Successfully sent! Your new coach will contact you soon.");
    }
}

//ispisivanje about us sekcije

function aboutOutput(){

    let heading = ["Origin","Our goal","Information"];
    let descript = ["MaxFit was founded in 2003 as a family owned and operated business. MaxFit is a results-driven fitness brand built from weightlifting culture, committed to pushing our bodies to levels constantly challenging our limits. Here, great shape is an authentic passion, and strong, fit, and healthy lifestyles are the norm. We don’t back down, and we live for the burn to push our bodies to go beyond what we think they’re capable of.","Here at MaxFit you aren’t only joining a gym, you join a team of individuals who are committed to leading strong, fit, and healthy lifestyles. Our amazing coaches are ready to make sure you break boundaries and achieve your full potential. At MaxFit, our facilities ensure that you have full access to everything you need to reach that next level.","Our working time: Every day 06:00 - 23:00 </br>Address: 35 Green St. | Bronx, NY 10468  </br>Phone: +1-212-555-0160"];

    let content= [
        {
        image: {
            src: "img/building.jpg",
            alt: "Our gym"
    },
}
]

    let output ="";
    output+=`
    <div class="row text-center">
			<h3 class="section-heading text-light text-uppercase subj">About us</h3>
                <div class="col-md-12 col-lg-6 text-end">
                `
                for (let i=0;i<heading.length;i++){
                    output+=`
					<h3 class="h4 text-light text-uppercase">${heading[i]}</h3>
					<p class="text-light">${descript[i]}</p>
					`
                }
                for(let obj of content){
                output+=`
				</div>
				<div class="discipline col-md-12 col-lg-6">
					<img class="img-fluid" src=${obj.image.src} alt=${obj.image.alt} />
				</div>
		</div>
    `
    }
    document.getElementById("aboutus").innerHTML = output;
}

//ispisivanje trenera

function coachOutput(){

    let coaches= [
        {
        name: "John Doe",
        image: {
            src: "img/john.jpg",
            alt: "Coach John"
            },
        },
        {
        name: "Jennifer Brown",
        image: {
            src: "img/jennifer.jpg",
            alt: "Coach Jennifer"
            },
        },
        {
        name: "Mike Daniels",
        image: {
            src: "img/mike.jpg",
            alt: "Coach Mike"
            },
        },
        {
        name: "Rick Rowling",
        image: {
            src: "img/rick.jpg",
            alt: "Coach Rick"
            }
        }
]

    let output ="";
    output+=`
    <div class="row text-center">
			<h3 class="section-heading text-light text-uppercase subj">Our coaches</h3>
                `
                for (let obj of coaches){
                    output+=`
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <img class="img-fluid rounded mx-auto d-block pic" src="${obj.image.src}" alt="${obj.image.alt}" />
                        <h4 class="h5 text-light">${obj.name}</h4>
                    </div>
					`
                };
    document.getElementById("coach").innerHTML = output;
}

//ispisvanje futera

function footerOutput(){
    var options = [
        {
            in: {
                href: "https://www.linkedin.com/in/milos-stojanovski-7903a6153/",
                icon: "fab fa-linkedin",
                nameL: "FLinkedIN"
            },
            ig: {
                href: "https://www.instagram.com/milos__stojanovski/",
                icon: "fab fa-instagram-square",
                nameL: "Instagram"
            },
            fb: {
                href: "https://www.facebook.com/milos.stojanovski",
                icon: "fab fa-facebook-square",
                nameL: "Facebook"
            },
            sitemap: {
                href: "sitemap.xml",
                icon: "fas fa-sitemap",
                nameL: "SiteMap"
            },
        }];
    var output = "";

    for (let obj of options){
    output +=`
                <a  href="${obj.in.href}"><i class="${obj.in.icon}"></i></a>
                <a  href="${obj.ig.href}"><i class="${obj.ig.icon}"></i></a>
                <a  href="${obj.fb.href}"><i class="${obj.fb.icon}"></i></a>
                <a  href="${obj.sitemap.href}"><i class="${obj.sitemap.icon}"></i></a>
    `
    }
    document.getElementById("icons").innerHTML = output;
}