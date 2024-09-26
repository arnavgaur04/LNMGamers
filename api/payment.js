var request = require('request');

module.exports = (req, res) => {
  var total = 0;
  var slot = req.body.data.slots.length === 1 ? [req.body.data.slots] : req.body.data.slots;

  // Calculate total based on your logic
  slot.forEach(item => {
    if (item[0] !== 9) {
      total += item[2] * 60;  // Example calculation
    } else {
      total += item[2] * 120;
    }
  });

  var id = String(Date.now());
  var options = {
    'method': 'POST',
    'url': 'https://merchant.upigateway.com/api/create_order',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "key": "d12b0d74-6f32-43fe-8e62-fc04d284fbfc",
      "client_txn_id": id,
      "amount": String(total),
      "p_info": "Slots",
      "customer_name": req.body.data.name,
      "customer_email": req.body.data.email,
      "customer_mobile": "9090909090",
      "redirect_url": "http://lnmgamers.in/success"
    })
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    var json = JSON.parse(response.body);
    res.json({ link: json.data.payment_url });
  });
};
