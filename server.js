var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = 3300;


app.listen(port, ()=> {
    console.log(`Server running at port ${port}`)
})