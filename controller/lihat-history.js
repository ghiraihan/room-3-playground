const history = require('../model/history');

function lihatHistoryController(req, res) {
    res.status(200).json({
        data: history
    });
}

module.exports = lihatHistoryController;