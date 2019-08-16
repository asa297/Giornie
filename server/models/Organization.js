const mongoose = require('mongoose')
const { Schema } = mongoose

const OrgSchema = new Schema({
  orgTypeId: Number,
  orgTypeName: String,
  orgName: String,
  orgComA: { type: Number, default: 0 },
  orgComB: { type: Number, default: 0 },
  orgCode: String,
  RecordIdBy: String,
  RecordNameBy: String,
  RecordDate: Date,
  LastModifyById: String,
  LastModifyByName: String,
  LastModifyDate: Date,
})

mongoose.model('organizations', OrgSchema)
