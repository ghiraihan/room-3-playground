// 1. panggil dulu module expressnya
const express = require ('express');
const app = express();

app.use(express.urlencoded());
// // 3. Running servernya
const PORT = 6666;

// todo : Controller
const lihat_history = require("./controller/lihat-history");
const hitungLuas = require("./controller/hitung-luas");
const hitungKeliling =require("./controller/hitung-keliling");

// todo : Routing
server.get("/lihat-history", lihat_history);

server.post('/hitung-luas', hitungLuas)

server.post('/hitung-keliling', hitungKeliling)

app.listen(PORT, function () {
    console.log(`Server berjalan di localhost:${PORT}`);
});