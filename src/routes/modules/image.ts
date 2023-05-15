import express from 'express'
const router = express.Router()

import { helloWorld, resizeImage } from '../../api/ImageControllers'

router.get('/hello', helloWorld)

router.get('/', resizeImage)

export default router
