export * from './lib/async'
export * from './lib/hash'
export * from './lib/number'
import api from './api'
import log from './lib/log'

async function initServer(): Promise<void> {
	log.info('Starting Server')
	let express = require('express')
	let bodyParser = require('body-parser')

	let app = express()

	// setup routes
	app.use(bodyParser.json())
	app.use('/api', api)

	// start the server
	let port = 5599
	let server = app.listen(port, () => {
		log.info(`I'm waiting at: ${port}`)
	})

	// allow closing the server on ctrl+c
	process.on('SIGINT', () => {
		server.close(() => {
			log.info('ya^')
			process.exit()
		})
	})
}

// tslint:disable-next-line:no-expression-statement
initServer()
