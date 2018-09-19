import { inspect } from 'util'
import log from '../../lib/log'

export { iceBreakers }

function iceBreakers(req: any, res: any) {
	log.debug('Toss a soccerball around with your feelings.', inspect(req.body))

	res.status(200).send('Yo, wazzup daddy.')
}
