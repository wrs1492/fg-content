export * from './lib/async'
export * from './lib/hash'
export * from './lib/number'
import api from './api'

async function initServer(): Promise<void> {
	console.log('Starting Server')
	let express = require('express')
	let bodyParser = require('body-parser')

	let app = express()

	// setup routes
	app.use(bodyParser.json())
	app.use('/api', api)

	// start the server
	let port = 5599
	let server = app.listen(port, () => {
		console.log(`I'm waiting at: ${port}`)
	})

	// allow closing the server on ctrl+c
	process.on('SIGINT', () => {
		server.close(() => {
			console.log('ya^')
			process.exit()
		})
	})
}

// tslint:disable-next-line:no-expression-statement
initServer()
