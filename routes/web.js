const express = require('express')
const router = express.Router()
const homeController = require('../controller/homeController')
const servicesController = require('../controller/servicesController')
const skillController = require('../controller/skillController')
const contactController = require('../controller/contactController')


router.get('/', homeController)
router.get('/services', servicesController)
router.get('/skill', skillController)
router.get('/contact', contactController)


module.exports = router