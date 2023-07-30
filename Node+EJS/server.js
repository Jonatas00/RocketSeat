const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolver aplicações de forma fácil"
        },
        {
            title: "E",
            message: "legante"
        },
        {
            title: "M",
            message: "uito fácil"
        },
        {
            title: "A",
            message: "cessibilidade"
        },
        {
            title: "I",
            message: "nteressantes"
        },
        {
            title: "S",
            message: "ofisticados"
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utlizando JS"
    res.render("pages/index", {qualitys: items, subtitle: subtitle});
})
app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Iniciando");