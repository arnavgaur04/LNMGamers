var express = require('express');
const app = express();
var sign_val, user_data, slot, split, length, pay_res, price;
var slot = new Array();
app.use(express.static("./src")); 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.post('/signedin', (req, res)=>{
  sign_val = req.body.val;
  user_data = req.body.user;
  console.log(sign_val);
  res.end();
})

app.post('/success', (req, res)=>{
  pay_res = req.body.result;
  if (slot[0].length == 1) {
    slot[0] = slot;
  }
  console.log(slot);
  res.json(
    {
      val: ["true", slot]
    }
  );
  res.end();
})


app.get('/admin', (req, res)=>{
  if (user_data[1] == "4nKkyqnSTvXozslUFwwDkOskKet1") {
    res.render('main');
  }

  else
  {
    console.log(user_data);
    res.send("Not allowed!");
  }
})

app.get('/success', (req, res)=>{
  if (pay_res == "true") {
    res.render('success');
  }
  
  else
  {
    res.send("Not allowed!");
  }
})

app.post('/pay', (req, res)=>{
  price = req.body.pay;
})

app.post('/payment', (req, res)=>{
  slot = req.body.slots;
  res.render("payment", {Price: price*100});
})

app.get('/main', (req, res)=>{
  if (sign_val == "true") {
    res.render('main', {Name: user_data[0]});
  }

  else
  {
    res.redirect("/");
  }
})

app.listen(5000, ()=>{
  console.log('Connected at port 5000....');
})


