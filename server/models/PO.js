const mongoose = require('mongoose')

const { Schema } = mongoose

const groupSchema = require('./Group')
const orgSchema = require('./Organization')
const sellerSchema = require('./Seller')

const POSchema = new Schema({
  orderId: Number,
  org: orgSchema,
  group: groupSchema,
  seller: sellerSchema,
  listItems: [],
  subTotal: Number,
  discount: { type: Number, default: 0 },
  discountPercent: Number,
  credit: Number,
  creditCharge: Number,
  creditChargePercent: Number,
  receiveCash: Number,
  changeCash: Number,
  grandTotal: Number,
  RecordIdBy: String,
  RecordNameBy: String,
  RecordDate: Date,
  LastModifyById: String,
  LastModifyByName: String,
  LastModifyDate: Date,
})

mongoose.model('poes', POSchema)
