const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 1111;
const fs = require('fs');


// We are using our packages here
app.use(bodyParser.json());       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(cors())
app.get('/FRONT/main_styles', (req, res) => {
    fs.readFile('./FRONT/main_styles.css', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(data);
        return res.end();
    });
})

//You can use this to check if your server is working
app.get('/', (req, res) => {
    fs.readFile('./FRONT/index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
})
app.get('/dmscreen', (req, res) => {
    fs.readFile('./FRONT/dmScreen.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
})


//Route that handles login logic
app.post('/login', (req, res) => {
    console.log(req.body.user);
    fs.readFile("BACK/userInfo.JSON", function (err, data) {
        var json = JSON.parse(data);
        var user = req.body.user;
        var senha = req.body.senha;
        var userIs = json[user]!==undefined;
        if (userIs&& senha == json[user].senha) {
            console.log("USER: " + user + "\nSenha: " + senha);
            res.redirect("/dmscreen");
            //            document.location = "naotemcomoadivinharesseurl888999$45d_ffs82/DmScreen/";
        }
    });

})

app.use('/files', express.static('FRONT'));

//Start your server on a specified port
app.listen(port, () => {
    
    console.log(`Server is runing on ${port}`);
})



