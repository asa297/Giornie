const { ValidateToken } = require('../../middlewares/AuthMiddleware')
const mongoose = require('mongoose')
const sellerModel = mongoose.model('sellers')

module.exports = app => {
  app.get('/api/seller', ValidateToken, async (req, res) => {
    const result = await sellerModel.find({})
    res.send(result)
  })

  app.get('/api/seller/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    if (!id) res.status(403).send({ message: 'Need Parameter' })

    const result = await sellerModel.findById(id)
    res.send(result)
  })

  app.post('/api/seller', ValidateToken, async (req, res) => {
    const { sellerName, sellerCode, sellerCom, sellerRemarks } = req.body
    const { user } = req
    const found = await sellerModel.findOne({ sellerCode })
    if (found) return res.status(403).send({ message: 'Seller Code is Duplicate.' })

    await sellerModel({
      sellerName,
      sellerCode,
      sellerCom,
      sellerRemarks,
      RecordIdBy: user.name,
      RecordNameBy: user.nickname,
      RecordDate: Date.now(),
      LastModifyById: user.name,
      LastModifyByName: user.nickname,
      LastModifyDate: Date.now(),
    }).save()

    res.send({ message: 'Seller is already inserted.' })
  })

  app.delete('/api/seller/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    if (!id) res.status(403).send({ message: 'Need Parameter' })
    await sellerModel.findByIdAndDelete(id)
    res.send({ message: 'Seller is already deleted.' })
  })

  app.put('/api/seller/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    const { sellerName, sellerCode, sellerCom, sellerRemarks } = req.body
    const { user } = req

    if (!id) res.status(403).send({ message: 'Need Parameter' })
    const found = await sellerModel.findById(id)
    if (!found) res.status(403).send({ message: 'Seller is not found.' })

    await sellerModel
      .updateOne(
        { _id: id },
        {
          $set: {
            sellerName,
            sellerCode,
            sellerCom,
            sellerRemarks,
            LastModifyById: user.name,
            LastModifyByName: user.nickname,
            LastModifyDate: Date.now(),
          },
        },
      )
      .exec()

    res.send({ message: 'Seller is already updated.' })
  })
}
