const express = require('express')
const app = express()
app.use(express.static('public'))

const multer = require('multer')

const target = multer({ dest: 'ups/' })

app.post('/up', target.single('file'), (req, res) => {
  res.send('I successfully held your file.')
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'ups/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const target2 = multer({ storage })

app.post('/up2', target2.single('file'), (req, res) => {
    res.send('I successfully held your file (2).')
  })

app.listen(3000, () => console.log('Running on localhost 3000'))
