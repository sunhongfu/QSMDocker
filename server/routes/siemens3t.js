const express = require('express')
const router = express.Router()

const {magic} = require('../controller/siemens3t')

router.post('/magic', magic)
router.post('/', magic)

module.exports = router