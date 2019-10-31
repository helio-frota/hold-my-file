const express = require('express')

const app = express()

app.use(express.static('public'))

const multer = require('multer')
const target = multer({ dest: 'uploaded/' })

const fileUpload = require('express-fileupload')
app.use(fileUpload())

app.post('/up', target.single('file'), (req, res) => {
  res.send('I successfully held your file.')
})


app.listen(3000, () => console.log('Running on localhost 3000'))
