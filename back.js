var express = require('express');
const app = express();
var sign_val, user_data, slot, pay_res, price;
var slot = new Array();
app.use(express.static("./src")); 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.post('/signedin', (req, res)=>{
  sign_val = req.body.val;
  user_data = req.body.user;
  res.end();
})

app.post('/success', (req, res)=>{
  pay_res = req.body.result;
  res.json(
    {
      val: ["true", slot],
      user_info: user_data
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
  if (req.body.slots[0].length == 1) {
    var arr = new Array();
    arr.push(req.body.slots[0]);
    slot = arr;
  }

  else
  {
    for (let i = 0; i < req.body.slots.length; i++) {
      slot.push(req.body.slots[i]);
    }
  }

  if (slot[0] == 8) {
    slot.push("9 1");
  }

  else if (slot[0] == 9) {
    slot.push("8 1");
  }

  else
  {
    for (let i = 0; i < slot.length; i++) {
      if (slot[i][0] == 8) {
        slot.push("9 1");
      }
      
      else if (slot[i][0] == 9) {
        slot.push("8 1");
      }
    }
  }

  res.render("payment", {Price: price});
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

app.post('/user', (req, res)=>{
  res.json(
    {
      user_info: user_data
    }
  );
})

app.listen(80, ()=>{
  console.log('Connected at port 80....');
})


