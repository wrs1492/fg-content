import { inspect } from 'util'
import IcebreakerDB from '../../dataAccessors/database/icebreakers/handler'
import log from '../../lib/log'

export { createIcebreaker, findIcebreaker }

async function createIcebreaker(req: any, res: any) {
	log.verbose('In route to create new icebreaker...')
	console.log('Creating icebreaker with body', inspect(req.body))
	let name = req.body.name
	let description = req.body.description

	let icebreakerId = await IcebreakerDB.createIcebreaker(name, description)

	res.status(200).send(icebreakerId)
}

async function findIcebreaker(req: any, res: any) {
	log.verbose('In route to find icebreaker...')
	console.log('Finding icebreaker with body', inspect(req.body))
	let name = req.body.name
	let icebreaker = await IcebreakerDB.findIcebreaker(name)

	res.status(200).send(icebreaker.description)
}
