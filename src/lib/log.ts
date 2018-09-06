import * as winston from 'winston'

const { combine, splat, simple, prettyPrint } = winston.format

const logger = winston.createLogger({
	format: combine(splat(), simple(), prettyPrint()),
	transports: [new winston.transports.Console()],
})

// first param of logger is priority
export default logger

// From highest to lowest priority:
// -emerg
// -alert
// -crit
// -error
// -warning
// -notice
// -info
// -debug
