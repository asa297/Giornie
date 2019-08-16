const { ValidateToken } = require('../../middlewares/AuthMiddleware')
const mongoose = require('mongoose')
const orgModel = mongoose.model('organizations')
const gruopModel = mongoose.model('groups')
const sellerModel = mongoose.model('sellers')
const itemModel = mongoose.model('items')
const purchaseOrderModel = mongoose.model('poes')

module.exports = app => {
  app.get('/api/po/groups', ValidateToken, async (req, res) => {
    const result = await gruopModel.find({}, { orgId: 1, groupCode: 1, groupStickerNumber: 1, guideName: 1 })
    res.send(result)
  })

  app.get('/api/po/sellers', ValidateToken, async (req, res) => {
    const result = await sellerModel.find({}, { sellerName: 1, sellerCode: 1 })
    res.send(result)
  })

  app.get('/api/po/item/:itemCode', ValidateToken, async (req, res) => {
    const { itemCode } = req.params
    const result = await itemModel.findOne({ itemCode }, { itemCode: 1, itemName: 1, itemPrice: 1, itemQty_Shop1: 1, itemTypeId: 1, itemTypeName: 1 })
    res.send(result)
  })

  app.post('/api/po', ValidateToken, async (req, res) => {
    const {
      group,
      seller,
      listItems,
      subTotal,
      grandTotalDiscount,
      discount,
      credit,
      grandTotalCreditCharge,
      creditCharge,
      receiveCash,
      changeCash,
      grandTotal,
    } = req.body
    const { user } = req

    const orgQuery = await orgModel.findById(group.orgId)
    const groupQuery = await gruopModel.findById(group._id)
    const sellerQuery = await sellerModel.findById(seller._id)

    const po = await purchaseOrderModel({
      orderId: Date.now(),
      org: orgQuery,
      group: groupQuery,
      seller: sellerQuery,
      listItems,
      subTotal,
      discount: grandTotalDiscount,
      discountPercent: discount,
      credit,
      creditCharge: grandTotalCreditCharge,
      creditChargePercent: creditCharge,
      receiveCash,
      changeCash,
      grandTotal,
      RecordIdBy: user.name,
      RecordNameBy: user.nickname,
      RecordDate: Date.now(),
      LastModifyById: user.name,
      LastModifyByName: user.nickname,
      LastModifyDate: Date.now(),
    }).save()

    if (!po) res.send({ message: 'Purchase Order is not inserted.' })
    // itemModel.bulkWrite(
    //   listItems.map(item => {
    //     const { _id, _qty } = item
    //     return {
    //       updateOne: {
    //         filter: { _id },
    //         update: {
    //           $inc: { itemQty_Shop1: _qty * -1 },
    //         },
    //         upsert: true,
    //       },
    //     }
    //   }),
    // )

    res.send({ data: po, message: 'Purchase Order is already inserted.' })
  })
}
