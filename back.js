var express = require('express');
const app = express();
var request = require('request')
var i = 80600;
var url;
var sign_val, user_data, pay_res, price;

app.use(express.static("./src")); 
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/admin', (req, res)=>{
  res.render('admin');
})

app.get('/success', (req, res)=>{
  console.log(req.query);
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0"+month;
  }
  var year = date.getFullYear();
  console.log(day);
  console.log(month);
  console.log(year);
  var options = {
    'method': 'POST',
    'url': 'https://merchant.upigateway.com/api/check_order_status',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": "d12b0d74-6f32-43fe-8e62-fc04d284fbfc",
      "client_txn_id": req.query.client_txn_id,
      "txn_date": day + "-" + month + "-" + year
    })
    
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var out = JSON.parse(response.body);
    if (out.status == true) {
      console.log(out.data.status);
      res.render(out.data.status);
    }

    else
    {
      console.log("not found");
      res.send("not found");
    }
  });
})

app.post('/payment', (req, res)=>{
  console.log(req.body.data);
  var slot = new Array();
  var total = 0;

  if (req.body.data.slots[0].length == 1) {
    var arr = new Array();
    arr.push(req.body.data.slots);
    slot = arr;
  }

  else
  {
    slot = req.body.data.slots;
  }

  for (let i = 0; i < slot.length; i++) {
    if(slot[i][0] != 9)
    {
      if (slot[i][2] == 1) {
        total = total + 80;
      }

      else if (slot[i][2] == 2) {
        total = total + 150;
      }

      else if (slot[i][2] == 3) {
        total = total + 200;
      }
      
      else if (slot[i][2] == 4) {
        total = total + 240;
      }
    }

    else
    {
      if (slot[i][2] == 1) {
        total = total + 160;
      }

      else if (slot[i][2] == 2) {
        total = total + 300;
      }

      else if (slot[i][2] == 3) {
        total = total + 400;
      }
      
      else if (slot[i][2] == 4) {
        total = total + 480;
      }
    }
  }

  for (let i = 0; i < slot.length; i++) {
    if (slot[i][0] == 8) {
      slot.push('9 0');
      console.log("8 present");
      break;
    }
    
    else if (slot[i][0] == 9) {
      slot.push('8 0');
      console.log("9 present");
      break;
    }
  }

  console.log(total);
  console.log(slot.length);

  var id = String(i++);
  total = String(total);
  var options = {
    'method': 'POST',
    'url': 'https://merchant.upigateway.com/api/create_order',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": "d12b0d74-6f32-43fe-8e62-fc04d284fbfc",
      "client_txn_id": id,
      "amount": total,
      "p_info": "Slots",
      "customer_name": req.body.data.name,
      "customer_email": req.body.data.email,
      "customer_mobile": "9090909090",
      "redirect_url": "http://lnmgamers.in/success",
      "udf1": "user defined field 1",
      "udf2": "user defined field 2",
      "udf3": "user defined field 3"
    })
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var json = JSON.parse(response.body);
    console.log(json);
    url = json.data.payment_url;
    res.json(
      {
        val: ["true", slot],
        link: url
      }
    );
  });
})

app.get('/main', (req, res)=>{
  res.render('main');
})

app.listen(80, ()=>{
  console.log('Connected at port 80....');
})


