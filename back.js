var express = require('express');
const app = express();
var request = require('request');
var i = 77780;
var url;
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

  var id = String(i++);
  var pri = String(price);
  var options = {
    'method': 'POST',
    'url': 'https://merchant.upigateway.com/api/create_order',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": "d12b0d74-6f32-43fe-8e62-fc04d284fbfc",
      "client_txn_id": id,
      "amount": pri,
      "p_info": "Slots",
      "customer_name": user_data[0],
      "customer_email": user_data[2],
      "customer_mobile": "9090909090",
      "redirect_url": "http://lnmgamers.in",
      "udf1": "user defined field 1",
      "udf2": "user defined field 2",
      "udf3": "user defined field 3"
    })
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var json = JSON.parse(response.body);
    url = json.data.payment_url;
    console.log(url);
    res.redirect(url);
  });

})

app.get('/main', (req, res)=>{
  console.log(user_data);
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


