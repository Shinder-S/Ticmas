let visibleMenu = false;

function showHideMenu(){
    if(visibleMenu){
        document.getElementById("nav").classList = "";
        visibleMenu = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        visibleMenu = true;
    }
}

function selected(){
    document.getElementById("nav").classList = "";
    visibleMenu = false;
}

function effectSkills(){
    let skills = document.getElementById("skills");
    let distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let ability = document.getElementsByClassName("progress");
        ability[0].classList.add("javascript");
        ability[0].classList.add("htmlcss");
        ability[0].classList.add("photoshop");
        ability[0].classList.add("wordpress");
        ability[0].classList.add("drupal");
        ability[0].classList.add("comunication");
        ability[0].classList.add("work");
        ability[0].classList.add("creativity");
        ability[0].classList.add("dedication");
        ability[0].classList.add("proyect");
    }
}

window.onscroll = function(){
    effectSkills();
}