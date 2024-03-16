const history = require("../model/history");

function luasBelahKetupat(req, res) {
  const data = req.body;
  const d1 = data.d1;
  const d2 = data.d2;
  const luas = (d1 * d2) / 2;
  res.status(200).send(`belah ketupat d1 ${d1} & d2 ${d2}, luas nya adalah ${luas}`);

  history.push({
    d1: d1,
    d2: d2,
    Luas: luas,
    status: "success",
  });
}

module.exports = luasBelahKetupat;