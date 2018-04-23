var tagsToFill = document.querySelectorAll(".to-fill");
var lengthInput = document.querySelector("input[name='length-text']");
var isLong = lengthInput.checked;
var length;
var languageInput = document.querySelector("#language-value");
var languageValue = languageInput.value;

document.addEventListener('DOMContentLoaded',function() {
    length = !isLong ? "LONG" : "TLDR";
    lengthInput.onchange = changeLength;
    languageInput.onchange = changeLanguage;
    // fillTags();
},false);

function fillTags(){
    tagsToFill.forEach((tag, i) => {
        tag.innerHTML = texts[languageValue][length][i];
    });
}

function changeLength(){
    isLong = lengthInput.checked;
    length = !isLong ? "LONG" : "TLDR";
    fillTags()
}

function changeLanguage(){
    languageValue = languageInput.value;
    fillTags()
}