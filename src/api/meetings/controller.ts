import { inspect } from 'util'

export { iceBreakers }

function iceBreakers(req: any, res: any) {
	console.log('Toss a soccerball around with your feelings.', inspect(req))

	res.status(200).send('Yo, wazzup daddy.')
}
