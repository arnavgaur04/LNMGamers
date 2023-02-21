const express = require('express');
const Razorpay = require('razorpay');
var mysql = require('mysql');
const path = require("path");
const app = express();

var login, phone_num, password, user, price, previous;
var incorrect = "";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "viewpass"
});

var instance = new Razorpay({
    key_id: 'rzp_test_iIGBsJCmta3cHq',
    key_secret: 'jPFurbAzIVDhQ7WXuPIhDC5Y',
});

app.use(express.static("./public")); 
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

function pay(Amount) {
    options = {
      amount: Amount,  
      currency: "INR",
      receipt: "order_rcptid_11"
    };

    instance.orders.create(options, function(err, order) {
      Order = order;
    });
}

app.post("/razorpay", (req, res) => {
    res.json([{
      order: Order,
    }])
    res.end();
})

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    login = result;
  });
});

app.get('/', (req, res)=>{
    res.render('login', {Incorrect: incorrect});
})

app.post('/login', (req, res)=>{
    phone_num = req.body.text[0];
    password = req.body.text[1];
    console.log(req.body);
    con.query(`SELECT * FROM login where phone_no = "${phone_num}" and password = "${password}"`, function (err, result, fields) {
        if (err) throw err;

        if (result.length == 0) 
        {
            login = false;
        }

        else
        {
            login = true;
        }

        if (login) {
            con.query(`SELECT * FROM user_data where phone_no = "${phone_num}"`, function (err, result, fields) {
                if (err) throw err;
                user = result;
                res.redirect('http://localhost:5000/plans');
            });
        }

        else
        {
            incorrect = "Incorrect";
            res.redirect('http://localhost:5000/');
        }
    });
})

app.get('/signup', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './public/signup.html'));
})

app.post('/signup', (req, res)=>{
    console.log(req.body);
    con.query(`insert into login (phone_no, password) values ("${req.body.text[1]}", "${req.body.text[3]}");`, function (err, result, fields) {
        if (err) throw err;
        con.query(`insert into user_data values ("${req.body.text[0]}", "${req.body.text[1]}", "${req.body.text[2]}");`, function (err, result, fields) {
            if (err) throw err;
            con.query(`insert into previous_plans(prime) values (null);`, function (err, result, fields) {
                if (err) throw err;
                con.query(`SELECT * FROM user_data where phone_no = "${req.body.text[1]}"`, function (err, result, fields) {
                    if (err) throw err;
                    user = result;
                    res.redirect('http://localhost:5000/plans');
                });
            });
        });
    });
})

app.post('/payment', (req, res)=>{
    console.log(req.body);
    if (req.body.application == "prime_video") {
        price = 5000;
    }

    else if (req.body.application == "hotstar") {
        price = 4000;
    }

    else if (req.body.application == "voot") {
        price = 3500;
    }

    else if (req.body.application == "zee5") {
        price = 3500;
    }

    else if (req.body.application == "sonyliv") {
        price = 4000;
    }

    else
    {
        price = 0;
    }
    
    pay(price);

    if (price > 0) {
        res.redirect('http://localhost:5000/payment');
    }

    else
    {
        res.redirect('http://localhost:5000/plans');
    }
})

app.get('/payment', (req, res)=>{
    res.render('payment', {Price: price});
})

app.get('/plans', (req, res)=>{
    con.query(`SELECT * FROM v2 where phone_no = "${user[0].phone_no}"`, function (err, result, fields) {
        if (err) throw err;
        console.log(user);
        previous = result;
        res.render('plans', {User: user, Price: price});
    });
})

app.get('/profile', (req, res)=>{
    console.log(previous);
    res.render('profile', {User: user, Previous: previous[0]});
})

app.all('*', (req, res)=>{
    res.send('<h1>Not Found</h1>')
})

app.listen(5000, ()=>{
    console.log('Connected at port 5000....');
})



