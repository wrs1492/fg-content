import * as express from 'express'
import * as meetings from './meetings/controller'

const router = express.Router()

router.route('/meetings/icebreaker/create').post(meetings.createIcebreaker)
router.route('/meetings/icebreaker/find').post(meetings.findIcebreaker)

export default router
