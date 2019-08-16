const { ValidateToken } = require('../../middlewares/AuthMiddleware')
const mongoose = require('mongoose')
const purchaseOrderModel = mongoose.model('poes')

module.exports = app => {
  app.get('/api/report/po', ValidateToken, async (req, res) => {
    const result = await purchaseOrderModel.find({})
    res.send(result)
  })
}
