navOutput();


function navOutput(){

    let tag = ["index.html","index.html","#","index.html"]
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
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
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