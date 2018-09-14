/*
import * as winston from 'winston'
import * as colors from 'colors'
const { combine, splat, simple, prettyPrint } = winston.format


const logger = winston.createLogger({
	format: combine(splat(), simple(), prettyPrint()),
	transports: [new winston.transports.Console()],
})

function format(color: string, args: any) {
	if (args.length > 1) {
		args[0] = (colors as any)[color].bold(args[0]) + colors.white.bold(':')
	}

	return args
}

// Wrapping the logger to provide formatting for a 'context' argument
// e.g. log.debug('class.function', 'blew up for reasons and stuff')
const log: any = {
	logger,
	error: (...args) => (logger.error as any)(...format('red', args)),
	warn: (...args) => (logger.warn as any)(...format('white', args)),
	info: (...args) => (logger.info as any)(...format('white', args)),
	verbose: (...args) => (logger as any).verbose(...format('white', args)),
	debug: (...args) => (logger as any).debug(...format('white', args)),
	silly: (...args) => (logger as any).info(...format('rainbow', args)),
}

export default log
*/
