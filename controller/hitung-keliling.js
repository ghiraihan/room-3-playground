const history = require("../model/history")

function kelilingBelahKetupat (req, res) {
    // 1. ambil data dari client
    const data = req.body;
    const sisi = data.sisi
 
    // 2. hitung keliling
    const keliling = 4*sisi;
};

module.exports = kelilingBelahKetupat;