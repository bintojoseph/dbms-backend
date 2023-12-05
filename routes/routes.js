const express = require('express')

const db = require('../handlers/index.js')

const router = express.Router()

router.get('/students', db.getStudents)

module.exports = router