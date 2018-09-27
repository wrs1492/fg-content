import api from './api'
import log from './lib/log'

async function initServer(): Promise<void> {
	log.info('Starting Server')
	let express = require('express')
	let mongoose = require('mongoose')
	let bodyParser = require('body-parser')

	// create the app
	let app = express()

	// connect to the database
	try {
		await mongoose.connect(
			'mongodb://localhost:27017/fg-content',
			{ useNewUrlParser: true },
		)
	} catch (error) {
		log.error('Unable to start: No database connection')
		process.exit()
		return
	}

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
			log.info('Bye')
			process.exit()
		})
	})
}

// tslint:disable-next-line:no-expression-statement
initServer()
