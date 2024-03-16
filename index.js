// 1. panggil dulu module expressnya
const express = require ('express');
const app = express();

app.use(express.urlencoded());
// // 3. Running servernya
const PORT = 6666;

app.listen(PORT, function () {
    console.log(`Server berjalan di localhost:${PORT}`);
});