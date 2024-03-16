const express = require('express');
const PORT = 3555;

const app = express();
app.use(express.urlencoded());

//CONTROLLER
const lihatHistory = require('./controller/lihat-history')
;
// ROUTING

app.get('/hitung-luas', function(req, res){
    const data = req.body;
    console.log("data:", data);
    const d1 = data.d1;
    const d2 = data.d2;
    const luas = d1 * d2 /2;
    res.status(201).json({
        status: "success",
        d1: d1,
        d2: d2,
        luas: luas
    })
});
app.post('/hitung-keliling', function(req, res) {
    const data = req.body;
    const sisi = data.sisi
    const keliling = 4 * sisi
    res.status(201).json({
        status: "success",
        sisi: sisi,
        keliling: keliling
    });
});
app.get('/lihat-history', lihatHistory); 

app.listen(PORT, function() {
    console.log(`Server berjalan di localhost:${PORT}`)
});