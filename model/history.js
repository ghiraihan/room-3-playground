const client = require('./dbConnection')
async function history(req,res){
    //ambil data dari db
    const data = await client.query(`
    SELECT * FROM history;
    `);
    res.status(200).json({data: [...data.rows]});
}
module.exports = history;