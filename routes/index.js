const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).render('index.html')
})

module.exports = router