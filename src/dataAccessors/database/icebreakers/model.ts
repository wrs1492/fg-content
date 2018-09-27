// tslint:disable-next-line:no-var-requires // TODO replace with import
let mongoose = require('mongoose')

let schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
})

export default mongoose.model('icebreaker', schema, 'icebreakers')
