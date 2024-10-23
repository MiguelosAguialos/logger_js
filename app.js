const { logger } = require('./log')

logger.info('Alou alou', 'alou alou')
setTimeout(() => {
    logger.info('Alou 2')
}, 2000)