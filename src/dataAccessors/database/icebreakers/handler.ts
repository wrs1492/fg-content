import model from './model'
import log from '../../../lib/log'
import Icebreaker from './Icebreaker'

export default {
	createIcebreaker,
	findIcebreaker,
}

/**
 * Create a new icebreaker. If the entry already exists, replace it with the new one.
 */
async function createIcebreaker(name: string, description: string): Promise<string> {
	log.verbose('Storing new icebreaker...')
	let icebreaker = new Icebreaker(name, description)
	let icebreakerModel = new model(icebreaker)

	let options = {
		upsert: true,
	}

	// update or insert // TODO make this actualy update, and not insert
	await icebreakerModel.collection.insertOne(icebreaker, options)

	console.log('Icebreaker', name, 'added with id', icebreakerModel._id)

	return icebreakerModel._id
}
async function findIcebreaker(name: string): Promise<Icebreaker> {
	log.verbose('Finding stored icebreaker...')
	let icebreaker = await model.collection.findOne({ name })

	// verify
	if (icebreaker) {
		console.log('Icebreaker', name, 'was found.')
	} else {
		console.log('Icebreaker', name, 'could not be found.')
	}

	return icebreaker
}
