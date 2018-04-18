var express = require("express"),
    texts   = require("./public/data/textsArticles.json");
    app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {texts: JSON.stringify(texts["home"])});
});

app.get("/projects", function(req, res){
    res.send("projects index");
});

app.get('/projects/:name', function(req, res){
    if(texts[req.params.name]) res.render(req.params.name, {texts: JSON.stringify(texts[req.params.name])});
    else res.send("pas trouvé");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("C'est tipar !");
});