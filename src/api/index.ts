import * as express from 'express'
import { iceBreakers } from './meetings/controller'

const router = express.Router()

router.route('/meetings/icebreakers').post(iceBreakers)

export default router
