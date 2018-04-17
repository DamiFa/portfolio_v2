var tagsToFill = document.querySelectorAll(".to-fill");

function fillTags(language, length){
    tagsToFill.forEach((tag, i) => {
        tag.innerHTML = texts[language][length][i];
    });
}

fillTags("EN", "LONG");