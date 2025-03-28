const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { num } = req.query;
  const logger = req.app.locals.logger;

  if (isNaN(num) || parseFloat(num) < 0) {
    const error = 'Invalid input: num must be a non-negative number.';
    logger.error(error);
    return res.status(400).json({ error });
  }

  const result = Math.sqrt(parseFloat(num));
  logger.info(`Square root: √${num} = ${result}`);
  res.json({ result });
});

module.exports = router;
