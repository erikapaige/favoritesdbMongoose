const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./songRoutes.js'))
router.use('/api', require('./foodRoutes.js'))
router.use('/api', require('./gameRoutes.js'))
router.use('/api', require('./movieRoutes.js'))


module.exports = router