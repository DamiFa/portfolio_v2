const projectIcons = {};
var currentProjectSelected = "";

document.addEventListener('DOMContentLoaded',function() {
    fillProjectIcons();
    currentProjectSelected = getLastUrlPart();
    setSelectedProject();
},false);

function getLastUrlPart (){
    let urlPath = window.location.pathname;
    let partsConnector = "/";

    let partedUrlPath = urlPath.split(partsConnector);
    let lastUrlPart = partedUrlPath[partedUrlPath.length-1];

    return lastUrlPart;
}

function fillProjectIcons (){
    let rawIcons = document.querySelectorAll(".icon");

    rawIcons.forEach(element => {
        projectIcons[element.id] = element;
    });
}

function setSelectedProject (){
    if(currentProjectSelected !== "") {
        assignClassToProject ();
    }
}

function assignClassToProject (){
    for(var project in projectIcons){
        if(project === currentProjectSelected) projectIcons[project].classList.add("icon-selected");
        else projectIcons[project].classList.add("icon-unselected");
    }
}