export * from './lib/async'
export * from './lib/hash'
export * from './lib/number'

import logger from './lib/log'

async function initServer(): Promise<void> {
	logger.log('info', 'hello world')
	logger.log('debug', 'hello world')
	logger.log('error', 'hello world')
}

// tslint:disable-next-line:no-expression-statement
initServer()
