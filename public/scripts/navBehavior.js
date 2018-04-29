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
    let lastPartIndex = partedUrlPath.length-1;
    let lastUrlPart = partedUrlPath[lastPartIndex];

    return lastUrlPart;
}

function fillProjectIcons (){
    let iconElements = document.querySelectorAll(".icon");

    iconElements.forEach(iconElement => {
        projectIcons[iconElement.id] = iconElement;
    });
}

function setSelectedProject (){
    if(currentProjectSelected !== "") {
        assignClassToProject ();
    }
}

/**
 * Loop dans les icones et compare si le projet de l'iteration est le currentProjectSlected.
 * Si c'est le cas, il lui donne la classe icon-selected.
 * Sinon il lui donne la classe icon-unselected.
 */
function assignClassToProject (){
    for(var icon in projectIcons){
        if(icon === currentProjectSelected) projectIcons[icon].classList.add("icon-selected");
        else projectIcons[icon].classList.add("icon-unselected");
    }
}