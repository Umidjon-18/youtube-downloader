const express = require("express");
const bodyParser = require("body-parser");
const ytdl = require("ytdl-core");
const cors = require('cors');

const app = express();



app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
})


app.get("/download", (req, res) => {

    var URL = req.query.URL;

    res.header("Content-Disposition", "attachment; filename=video.mp4")

    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);

})

let port = process.env.PORT;

if (port == null || port == "") {
    port = 8000;
}

app.listen(port, () => {
    console.log("Server ishga tushdi");
})

// https://youtu.be/EGyfdtW5zn0