const express = require('express');
const expressStatic = express.static;
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const join = require('path').join;
const port = process.env.PORT || 5003;

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, './public/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(join(__dirname, './public/index.html'));
});


app.listen(port, () => {
    console.log(`Server running on ${port}/`);
});
