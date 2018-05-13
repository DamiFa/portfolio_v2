const projectIcons = {};
var currentProjectSelected = "";

document.addEventListener('DOMContentLoaded',function() {
    fillProjectIcons();
    currentProjectSelected = getLastUrlPart();
    setSelectedProject();
},false);

function fillProjectIcons (){
    let iconElements = document.querySelectorAll(".icon");

    iconElements.forEach(iconElement => {
        projectIcons[iconElement.id] = iconElement;
    });
}

function getLastUrlPart (){
    let urlPath = window.location.pathname;
    let partsConnector = "/";

    let partedUrlPath = urlPath.split(partsConnector);
    let lastPartIndex = partedUrlPath.length-1;
    let lastUrlPart = partedUrlPath[lastPartIndex];

    return lastUrlPart;
}

function setSelectedProject (){
    if(currentProjectSelected !== "") {
        assignClassToProject ();
    }
}

function assignClassToProject (){
    for(var icon in projectIcons){
        if(icon === currentProjectSelected) projectIcons[icon].classList.add("icon-selected");
        else projectIcons[icon].classList.add("icon-unselected");
    }
}