const { ValidateToken } = require('../../middlewares/AuthMiddleware')
const mongoose = require('mongoose')
const groupModel = mongoose.model('groups')
const organizationModel = mongoose.model('organizations')

module.exports = app => {
  app.get('/api/group', ValidateToken, async (req, res) => {
    const result = await groupModel.find({})
    res.send(result)
  })

  app.get('/api/group/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    if (!id) res.status(403).send({ message: 'Need Parameter' })

    const result = await groupModel.findById(id)
    res.send(result)
  })

  app.post('/api/group', ValidateToken, async (req, res) => {
    const { org, groupCode, groupStickerNumber, guideName, groupRemarks } = req.body
    const { user } = req
    const found = await groupModel.findOne({ groupCode })

    if (found) return res.status(403).send({ message: 'Group Code is Duplicate.' })

    const orgQuery = await organizationModel.findOne({ _id: org._id })

    await groupModel({
      orgId: orgQuery._id,
      orgName: orgQuery.orgName,
      orgCode: orgQuery.orgCode,
      orgTypeId: orgQuery.orgTypeId,
      orgTypeName: orgQuery.orgTypeName,
      groupRemarks,
      groupCode,
      groupStickerNumber,
      guideName,
      RecordIdBy: user.name,
      RecordNameBy: user.nickname,
      RecordDate: Date.now(),
      LastModifyById: user.name,
      LastModifyByName: user.nickname,
      LastModifyDate: Date.now(),
    }).save()

    res.send({ message: 'Group is already inserted.' })
  })

  app.delete('/api/group/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    if (!id) res.status(403).send({ message: 'Need Parameter' })
    await groupModel.findByIdAndDelete(id)
    res.send({ message: 'Group is already deleted.' })
  })

  app.put('/api/group/:id', ValidateToken, async (req, res) => {
    const { id } = req.params
    const { org, groupCode, groupStickerNumber, guideName, groupRemarks } = req.body
    const { user } = req

    if (!id) res.status(403).send({ message: 'Need Parameter' })
    const found = await groupModel.findById(id)
    if (!found) res.status(403).send({ message: 'Group is not found.' })
    const orgQuery = await organizationModel.findOne({ _id: org._id })
    await groupModel
      .updateOne(
        { _id: id },
        {
          $set: {
            orgId: orgQuery._id,
            orgName: orgQuery.orgName,
            orgCode: orgQuery.orgCode,
            orgTypeId: orgQuery.orgTypeId,
            orgTypeName: orgQuery.orgTypeName,
            groupRemarks,
            groupCode,
            groupStickerNumber,
            guideName,
            LastModifyById: user.name,
            LastModifyByName: user.nickname,
            LastModifyDate: Date.now(),
          },
        },
      )
      .exec()

    res.send({ message: 'Group is already updated.' })
  })
}
