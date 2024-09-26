var request = require('request');

module.exports = (req, res) => {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  var year = date.getFullYear();

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
    if (out.status === true) {
      res.render(out.data.status);
    } else {
      res.send("not found");
    }
  });
};
