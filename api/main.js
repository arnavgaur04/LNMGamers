const path = require('path');

module.exports = (req, res) => {
  // Serve the static main.html file from your "src" directory
  res.sendFile(path.resolve(__dirname, '../src/main.html'));
};
