// 1. panggil dulu module expressnya
const express = require ('express');
const app = express();

app.use(express.urlencoded());
// // 3. Running servernya
const PORT = 1495;

// todo : Controller
const lihatHistoryController = require("./controller/lihat-history");
const luasBelahKetupat = require("./controller/hitung-luas");
const kelilingBelahKetupat =require("./controller/hitung-keliling");

// todo : Routing
app.get("/lihat-history", lihatHistoryController);

app.post('/hitung-luas', luasBelahKetupat);

app.post('/hitung-keliling', kelilingBelahKetupat);

app.listen(PORT, function () {
    console.log(`Server berjalan di localhost:${PORT}`);
});