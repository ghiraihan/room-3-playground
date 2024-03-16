const history = require("../model/history")

function kelilingBelahKetupat (req, res) {
    // 1. ambil data dari client
    const data = req.body;
    const sisi = data.sisi

    // 2. hitung keliling
    const keliling = 4*sisi;
    res.status(200).send(`belah ketupat sisi ${sisi}, keliling nya adalah ${keliling}`);
    
  history.push({
    sisi: sisi,
    Keliling: keliling,
    status : "sukses"
  });
};

module.exports = kelilingBelahKetupat;