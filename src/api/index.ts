import * as express from 'express'
import { icebreakers } from './meetings/controller'

const router = express.Router()

router.route('/meetings/icebreakers').post(icebreakers)

export default router
