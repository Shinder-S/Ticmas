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
        ability[1].classList.add("htmlcss");
        ability[2].classList.add("photoshop");
        ability[3].classList.add("wordpress");
        ability[4].classList.add("drupa");
        ability[5].classList.add("comunication");
        ability[6].classList.add("work");
        ability[7].classList.add("creativity");
        ability[8].classList.add("dedication");
        ability[9].classList.add("management");
    }
}

window.onscroll = function(){
    effectSkills();
}