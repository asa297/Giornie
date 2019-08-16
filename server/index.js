const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const mongoose = require('mongoose')
const aws = require('aws-sdk')
const io = require('socket.io')(server)

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)

const gcloud_credential = {
  type: process.env.gcloud_type,
  project_id: process.env.gcloud_project_id,
  private_key_id: process.env.gcloud_private_key_id,
  private_key: process.env.gcloud_private_key.replace(/\\n/g, '\n'),
  client_email: process.env.gcloud_client_email,
  client_id: process.env.gcloud_client_id,
  auth_uri: process.env.gcloud_auth_uri,
  token_uri: process.env.gcloud_token_uri,
  auth_provider_x509_cert_url: process.env.gcloud_auth_provider_x509_cert_url,
  client_x509_cert_url: process.env.gcloud_client_x509_cert_url,
}

admin.initializeApp({
  credential: admin.credential.cert(gcloud_credential),
  databaseURL: 'https://giornie-6e979.firebaseio.com',
})

//AWS
aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_RESGION,
})

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Socket
require('./services/socket')(io)

//Models
require('./models/User')
require('./models/Organization')
require('./models/Group')
require('./models/Seller')
require('./models/Item')
require('./models/PO')

//API
require('./api/Common')(app)
require('./api/Organization')(app)
require('./api/Group')(app)
require('./api/Seller')(app)
require('./api/Item')(app)
require('./api/PurchaseOrder')(app)
require('./api/Report')(app)

const PORT = process.env.PORT || 5000

server.listen(PORT, err => {
  if (err) throw err
  console.log('> Ready on port', PORT)
})
