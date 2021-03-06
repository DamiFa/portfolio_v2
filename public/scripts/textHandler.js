var tagsToFill = document.querySelectorAll(".to-fill");
var lengthInput = document.querySelector("input[name='length-text']");
var languageInput = document.querySelector("#language-value");
var isLong = lengthInput.checked;
var language = languageInput.value;
var length;

document.addEventListener('DOMContentLoaded',function() {
    length = !isLong ? "LONG" : "TLDR";
    lengthInput.onchange = changeLength;
    languageInput.onchange = changeLanguage;
    fillTags();
},false);

function fillTags(){
    tagsToFill.forEach((tag, i) => {
        tag.innerHTML = texts[language][length][i];
    });
}

function changeLength(){
    isLong = lengthInput.checked;
    length = !isLong ? "LONG" : "TLDR";
    fillTags()
}

function changeLanguage(){
    language = languageInput.value;
    fillTags()
}