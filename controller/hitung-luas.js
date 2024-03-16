const history = require("../model/history");

function hitungLuas(req, res) {
  const data = req.body;
  const d1 = data.d1;
  const d2 = data.d2;
  const luas = (d1 * d2) / 2;
  res.status(200).send("Luas:" + luas);

  history.push({
    d1: d1,
    d2: d2,
    Luas: luas,
    status: "success",
  });
}

module.exports = hitungLuas;