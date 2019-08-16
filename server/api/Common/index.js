const mongoose = require('mongoose')
const userModel = mongoose.model('user')
const { ValidateToken } = require('../../middlewares/AuthMiddleware')

module.exports = app => {
  app.get('/api/user', ValidateToken, async (req, res) => {
    try {
      const user = await userModel.findOne({ email: req.user.email })

      res.send(user)
    } catch (error) {
      res.status(400).send(error)
    }
  })
}
