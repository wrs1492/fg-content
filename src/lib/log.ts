import * as colors from 'colors'
import * as winston from 'winston'

const transports = [
	new winston.transports.Console({
		colorize: true,
		timestamp: true,
		level: process.env.LOG_LEVEL || 'debug',
	}),
]

var logger = new winston.Logger({
	transports,
})

function format(color, args) {
	if (args.length > 1) {
		args[0] = colors[color].bold(args[0]) + colors.white.bold(':')
	}
	return args
}

// Wrapping the logger to provide formatting for a 'context' argument
// e.g. log.debug('class.function', 'blew up for reasons and stuff')
const log = {
	error: (...args) => logger.error(format('red', args)[0], format('red', args)[1]),
	warn: (...args) => logger.warn(format('white', args)[0], format('white', args)[1]),
	info: (...args) => logger.info(format('white', args)[0], format('white', args)[1]),
	verbose: (...args) => logger.verbose(format('white', args)[0], format('white', args)[1]),
	debug: (...args) => logger.debug(format('white', args)[0], format('white', args)[1]),
	silly: (...args) => logger.info(format('rainbow', args)[0], format('rainbow', args)[1]),
}

export default log
