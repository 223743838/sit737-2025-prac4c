const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { base, exponent } = req.query;
  const logger = req.app.locals.logger;

  if (isNaN(base) || isNaN(exponent)) {
    const error = 'Invalid input: base and exponent must be numbers.';
    logger.error(error);
    return res.status(400).json({ error });
  }

  const result = Math.pow(parseFloat(base), parseFloat(exponent));
  logger.info(`Exponentiation: ${base} ^ ${exponent} = ${result}`);
  res.json({ result });
});

module.exports = router;