

//ispis navigaicje

// navOutput();
//     offersOutput();
//     authorOutput();
//     formOutput();

//     aboutOutput();
//     coachOutput();
//     footerOutput();
window.onload = () => {

    CustomException.prototype = Object.create(Error.prototype);

    fetchData("navigation", navOutput)

    function fetchData(file, callback) {
        $.ajax({
            url: "assets/data/" + file + ".json",
            method: "get",
            dataType: "json",
            success: function (response) {
                callback(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function navOutput(data) {

        let output = "";
        output += `
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
        data.forEach(element => {
            output += `
			  <li class="nav-item">
				<a class="nav-link" href="${element.src}">${element.name}</a>
              </li>
              `
        });
        output += `
			</ul>
          </div>
          `
        document.getElementById("navig").innerHTML = output;
        try {
            if (document.getElementById("1"))
                fetchData("trainingOffers", offersOutput);
            else if (document.getElementById("2"))
                fetchData("categories", categoriesOutput);
            else throw new CustomException("Nepostojeca html stranica.");
        }
        catch (e) {
            console.error(e);
        }
    }

    // ispis ponude

    function offersOutput(data) {

        let output = "";
        data.forEach(obj => {
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
        });
        document.getElementById("packages").innerHTML = output;
        fetchData("author", authorOutput);
    }

    //ispis autora

    function authorOutput(data) {
        var output = "";

        output += `
                <h3 class="section-heading text-light text-uppercase subj"> Author </h3>
                <div class="col-md-4">
                    <img class="img-fluid rounded mx-auto d-block" src="${data.image.src}" alt="${data.image.alt}" />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <h4 class="h3 section-heading text-light"> ${data.nameFull}</h4>
                    <p id="description" class="text-muted"> ${data.descr} </p>
                </div>
                `;
        document.getElementById("author").innerHTML = output;
        fetchData("about", aboutOutput)
    }

    //ispisivanje forme

    function formOutput(data) {

        let i = 0;
        let output1 = "";
        output1 += `
<form name="form1" action="">
			<div class="row text-center text-uppercase justify-content-center" id="form">
                <h3 class="section-heading text-uppercase text-light subj">Take a short survey</h3>
                <p class="text-light">We want to help you to asses your qualities, to embrace your flaws, and to start your fitness journey with clear motive in mind. </br>Check boxes next to lines you agree/find yourself in, click submit and let us try to determine best course of action.</p>
                <div class="col-md-6 col-lg-4">
                    <div class="form-group">
`
        data.forEach(obj => {
            output1 += `                    
                        <div class="form-check text-start">
                            <input class="form-check-input" type="checkbox" name="list" value="" id="b${obj.id}">
                            <label class="form-check-label text-light" for="b${obj.id}">
                            ${obj.question}
                            </label>
                        </div>
`
        });
        output1 += `
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

    function formOutput2() {

        let arr = ["Crossfit", "Calisthenics", "Bodybuilding", "Powerlifting", "Gym Membership", "Recovery"]
        let output2 = "";
        output2 += `
<form action="">
			<div class="row text-center text-uppercase" id="form">
				<h3 class="section-heading text-uppercase text-light subj">Sign up for your first session!</h3>
                <div class="col-md-6 col-sm-12">
                `
        data.forEach(obj => {
            output2 += `
						<div class="form-group">
							<label class="text-light" for="">${obj.text}</label>
							<input type="text" id="${obj.tag}" class="form-control" required="required" placeholder="${obj.placeholder}"/>
							<p class="alert alert-danger alertOutput" id="${obj.alertId}">${obj.alert}</p>
						</div>
                        `
        });
        output2 += `
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
        for (let i = 1; (i < arr.length + 1); i++) {
            output2 += `
                            <option value="${i}">${arr[i - 1]}</option>
                            `
        }
        output2 += `
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
        for (let obj of alerts) {
            obj.style.display = "none";
        }
        document.getElementById('date').value = new Date().toISOString().slice(0, 10);

    }

    //obrada i validacija formi

    function formValidation1(field) {

        let list = [0, 0, 0, 0, 0];
        let num = 0;
        let sum = 0;
        for (let i = 0; i < field.length; i++) {
            if (field[i].checked == true && i == 0) { list[0]++; list[1]++; list[2]++ };
            if (field[i].checked == true && i == 1) list[1]++;
            if (field[i].checked == true && i == 2) list[2]++;
            if (field[i].checked == true && i == 3) { list[1]++; list[3]++ };
            if (field[i].checked == true && i == 4) { list[0]++; list[2]++ };
            if (field[i].checked == true && i == 5) list[2]++;
            if (field[i].checked == true && i == 6) list[0] += 10;
            if (field[i].checked == true && i == 7) list[4] += 10;
        }
        for (let i = 0; i < 5; i++) {
            sum += list[i];
            if (list[i] > num) num = i;
        }
        if (sum === 0) {
            window.alert("Please check at least one option.");
        }
        else {
            switch (num) {
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
            fetchData("formFields", formOutput2);
        }

    }

    // regex funkcije

    function hasNumber(myString) {
        return /\d/.test(myString);
    }

    function emailCheck(myString) {
        return /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/.test(myString);
    }

    function nameCheck(myString) {
        return /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,14}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,19})+$/.test(myString);
    }

    function phoneCheck(myString) {
        return /^[0][6][0-9]\s[0-9]{7,10}$/.test(myString);
    }


    function formValidation2() {
        let name, email, phone, date, program;
        name = document.getElementById("name").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;
        date = new Date(document.getElementById("date").value);
        program = document.getElementById("program").value;
        date.setHours(0, 0, 0, 0);

        let flag = false;

        let today = new Date();
        today.setHours(0, 0, 0, 0);

        if (name === "" || !nameCheck(name)) {
            document.getElementById("alertName").style.display = "block";
            flag = true;
        }
        else document.getElementById("alertName").style.display = "none";
        if (email === "" || !emailCheck(email)) {
            document.getElementById("alertEmail").style.display = "block";
            flag = true;
        }
        else document.getElementById("alertEmail").style.display = "none";
        if (phone === "" || !phoneCheck(phone)) {
            document.getElementById("alertPhone").style.display = "block";
            flag = true;
        }
        else document.getElementById("alertPhone").style.display = "none";
        if (date < today) {
            document.getElementById("alertDate").style.display = "block";
            flag = true;
        }
        else document.getElementById("alertDate").style.display = "none";
        if (program === "Choose your program") {
            document.getElementById("alertProg").style.display = "block";
            flag = true;
        }
        else document.getElementById("alertProg").style.display = "none";
        if (!flag) {

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("date").value = new Date().toISOString().slice(0, 10);
            document.getElementById("program").value = "Chose your program";
            window.alert("Successfully sent! Your new coach will contact you soon.");
        }
    }

    //ispisivanje about us sekcije

    function aboutOutput(data) {

        let content = [
            {
                image: {
                    src: "assets/img/building.jpg",
                    alt: "Our gym"
                },
            }
        ]

        let output = "";
        output += `
    <div class="row text-center">
			<h3 class="section-heading text-light text-uppercase subj">About us</h3>
                <div class="col-md-12 col-lg-6 text-end">
                `
        data.forEach(element => {
            output += `
					<h3 class="h4 text-light text-uppercase">${element.heading}</h3>
					<p class="text-light">${element.description}</p>
					`
        });
        content.forEach(obj => {
            output += `
				</div>
				<div class="discipline col-md-12 col-lg-6">
					<img class="img-fluid" src=${obj.image.src} alt=${obj.image.alt} />
				</div>
		</div>
    `
        });
        document.getElementById("aboutus").innerHTML = output;
        fetchData("coaches", coachOutput);
    }

    //ispisivanje trenera

    function coachOutput(data) {

        let output = "";
        output += `
    <div class="row text-center">
			<h3 class="section-heading text-light text-uppercase subj">Our coaches</h3>
                `
        data.forEach(obj => {
            output += `
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <img class="img-fluid rounded mx-auto d-block pic" src="${obj.image.src}" alt="${obj.image.alt}" />
                        <h4 class="h5 text-light">${obj.name}</h4>
                    </div>
					`
        });
        document.getElementById("coach").innerHTML = output;
        fetchData("footerIcons", footerOutput);
    }

    //ispisvanje futera

    function footerOutput(data) {

        var output = "";
        data.forEach(obj => {
            output += `
                <a  href="${obj.href}"><i class="${obj.icon}"></i></a>
    `
        });
        document.getElementById("icons").innerHTML = output;
        fetchData("formQuestions", formOutput);
    }

    function CustomException(message) {
        const error = new Error(message);
        return error;
    }


}