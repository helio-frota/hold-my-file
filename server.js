const express = require('express')
const multer = require('multer')

const pathToFile = './foo/file.txt'

const app = express()

const target = multer({ dest: 'uploaded/' })

app.post('/', target.single('file'), (req, res) => {
  res.send('I successfully held your file.')
})

app.listen(3000, () => console.log('Running on localhost 3000'))

const request = require('supertest')
const sinon = require('sinon')

async function run() {
	sinon.useFakeTimers({ shouldAdvanceTime: true })  // Change this to false and it reproduces the issue.
	console.log('before')
	await request(app)
		.post('/')
		.attach('file', pathToFile)
	console.log('after')
}

run()