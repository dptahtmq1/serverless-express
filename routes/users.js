const express = require('express');
const router = express.Router();

const trigger = require('../services/trigger');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/trigger', async function (req, res, next) {

  try {
    const response = await trigger.trigger(1);
    console.log(`trigger status: ${response.status}`);
    res.send('trigger done');
  } catch (e) {
    res.status(500).send('trigger error: ', e.message);
  }
});

module.exports = router;
