const router = require('express').Router()

router.use('/api', require('./bookRoutes.js'))
router.use('/api', require('./foodRoutes'))
router.use('/api', require('./gameRoutes'))
router.use('/api', require('./movieRoutes'))
// router.use('/api', require('./songRoutes'))

module.exports = router