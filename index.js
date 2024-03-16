// 1. panggil dulu module expressnya
const express = require ('express');
const app = express();

app.use(express.urlencoded());
// // 3. Running servernya
const PORT = 1495;

// todo : Controller
const lihatHistoryController = require("./controller/lihat-history.js");
const luasBelahKetupat = require("./controller/hitung-luas.js");
const kelilingBelahKetupat =require("./controller/hitung-keliling.js");

// todo : Routing
app.get('/hitung-luas', function(req, res){
    res.status(200).sendFile(__dirname + "/view/index-luas.html");
});
app.get('/hitung-keliling', function(req, res){
    res.status(200).sendFile(__dirname + "/view/index-keliling.html");
});

app.get("/lihat-history", lihatHistoryController);

app.post('/hitung-luas', luasBelahKetupat);

app.post('/hitung-keliling', kelilingBelahKetupat);

app.listen(PORT, function () {
    console.log(`Server berjalan di localhost:${PORT}`);
});