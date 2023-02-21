var express = require('express');
const app = express();
var sign_val, user_data, slot, split, length, pay_res;
var price = 0;
app.use(express.static("./src")); 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.post('/signedin', (req, res)=>{
  sign_val = req.body.val;
  user_data = req.body.user;
})

app.post('/success', (req, res)=>{
  pay_res = req.body.result;
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

app.post('/payment', (req, res)=>{
  slot = req.body.slots;
  price = 0;

  if (slot == undefined) {
    res.redirect("/main");
  }

  else
  {
    length = slot.length;
    if (slot[1] == " " || slot[1] == "0") {
      var new_slot = "";
      for (let index = 0; index < length; index++) {
        new_slot = new_slot + slot[index];      
      }
      slot = [0];
      slot[0] = new_slot;
    }

    for (let i = 0; i < slot.length; i++) {
      split = slot[i].split(" ");
      if (split[1] == "1") {
        price = price + 80;
      } 
      
      else if (split[1] == "2") {
        price = price + 150;
      }
  
      else if (split[1] == "3") {
        price = price + 200;
      }
  
      else
      {
        price = price + 250;
      }
    }
  
    res.render("payment", {Price: price*100});
  }
})

app.get('/main', (req, res)=>{
  if (sign_val == "true") {
    res.render('main', {Name: user_data[0]});
  }

  else
  {
    res.send("not allowed!");
  }
})

app.listen(5000, ()=>{
  console.log('Connected at port 5000....');
})


