const mongoose = require('mongoose')
const { Schema } = mongoose

const SellerSchema = new Schema({
  sellerName: String,
  sellerCode: String,
  sellerCom: { type: Number, default: 0 },
  sellerRemarks: String,
  RecordIdBy: String,
  RecordNameBy: String,
  RecordDate: Date,
  LastModifyById: String,
  LastModifyByName: String,
  LastModifyDate: Date,
})

mongoose.model('sellers', SellerSchema)
