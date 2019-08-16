const mongoose = require('mongoose')
const { Schema } = mongoose

const ItemSchema = new Schema({
  itemCode: String,
  itemName: String,
  itemFactory: String,
  itemColor: String,
  itemSkin: String,
  itemPrice: Number,
  itemQty_HO: { type: Number, default: 0 },
  itemQty_Shop1: { type: Number, default: 0 },
  itemRemarks: String,
  itemTypeId: Number,
  itemTypeName: String,
  imageUrl: String,
  imageKey: String,
  RecordIdBy: String,
  RecordNameBy: String,
  RecordDate: Date,
  LastModifyById: String,
  LastModifyByName: String,
  LastModifyDate: Date,
})

mongoose.model('items', ItemSchema)
