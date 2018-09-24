import { inspect } from 'util'
import ICEBREAKERS from './icebreakers'

export { icebreakers }

function icebreakers(req: any, res: any) {
	console.log('Toss a soccerball around with your feelings.', inspect(req.body))

	let icebreakerName = req.body.icebreakerName

	// TODO replace with call to db
	let content = ICEBREAKERS[icebreakerName]

	res.status(200).send(content)
}
